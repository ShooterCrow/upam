import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  setCredentials,
  clearCredentials,
} from "../../pages/authenticationPages/authSlice";

/**
 * apiSlice configuration flags for AutoRecovery.
 * Set to false to disable specific reload/refresh criteria.
 */
const ENABLE_PERIODIC_RELOAD = true; // Reload after every 6 API requests for stability
const ENABLE_ERROR_RELOAD = false; // Reload on consecutive GET errors for recovery

const EXCLUDED_ROUTES = ["/register"];

const isExcluded = () => {
  return EXCLUDED_ROUTES.some((route) =>
    window.location.pathname.startsWith(route),
  );
};

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  credentials: "include",
  timeout: 30000,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  // --- Request-count stability safeguard ---
  // Replaces the old "6 clicks" mechanism. After every 6 API requests
  // (regardless of success/failure), reload to clear any browser-accumulated
  // stale state. Only fires when the user is authenticated.
  const state = api.getState();
  if (state.auth?.token && args.url !== "/auth/refresh") {
    const reqCount =
      parseInt(sessionStorage.getItem("api_request_count") || "0") + 1;
    if (reqCount >= 25) {
      sessionStorage.setItem("api_request_count", "0");
      console.log(
        "25 API requests made. Triggering periodic reload for stability.",
      );
      if (isExcluded()) {
        console.log("Route is excluded. Skipping periodic reload.");
        sessionStorage.setItem("api_request_count", "0");
      } else if (!ENABLE_PERIODIC_RELOAD) {
        console.log(
          "25 API requests made, but ENABLE_PERIODIC_RELOAD is false. Skipping.",
        );
        sessionStorage.setItem("api_request_count", "0");
      } else {
        window.location.reload();
      }
      return result; // unreachable but keeps the flow explicit
    }
    sessionStorage.setItem("api_request_count", reqCount.toString());
  }

  // If successful, also reset the consecutive error counter
  if (!result?.error) {
    sessionStorage.setItem("consecutive_api_errors", "0");
  }

  // Handle network errors or timeouts explicitly
  if (result?.error) {
    if (result.error.status === 429) {
      window.dispatchEvent(
        new CustomEvent("api-rate-limit-exceeded", {
          detail: {
            message:
              result.error.data?.message ||
              result.error.data?.error ||
              "429 too many requests",
          },
        }),
      );
    }

    if (result.error.status === "FETCH_ERROR") {
      console.error("Network error or timeout occurred:", result.error.error);
    }

    // If 403 Forbidden (Access token expired)
    // AND we are not already trying to refresh (prevents infinite loop)
    if (result?.error?.status === 403 && args.url !== "/auth/refresh") {
      console.log("Access token expired, attempting refresh...");

      try {
        // Try to get a new token
        const refreshResult = await baseQuery(
          "/auth/refresh",
          api,
          extraOptions,
        );

        if (refreshResult?.data) {
          console.log("Refresh successful, retrying original request.");
          // Store the new token + user data
          api.dispatch(setCredentials({ ...refreshResult.data }));
          // Retry the original query with new token
          result = await baseQuery(args, api, extraOptions);
        } else {
          console.log("Refresh failed, clearing credentials.");
          api.dispatch(clearCredentials());
        }
      } catch (err) {
        console.error("Refresh logic encountered an error:", err);
        api.dispatch(clearCredentials());
      }
    }

    // New AutoRecovery logic: If an error persists and the user is logged in on a GET request,
    // trigger a full reload. We skip mutations (POST/PUT/PATCH/DELETE) to avoid discarding
    // user actions or double-submitting data.
    const requestMethod =
      (typeof args === "object" ? args.method : undefined) || "GET";
    const isGetRequest = requestMethod.toUpperCase() === "GET";

    const state = api.getState();
    if (state.auth?.token && isGetRequest && args.url !== "/auth/refresh") {
      // Get and increment the consecutive error counter from sessionStorage
      const currentErrors = parseInt(
        sessionStorage.getItem("consecutive_api_errors") || "0",
      );
      const newErrorCount = currentErrors + 1;
      sessionStorage.setItem(
        "consecutive_api_errors",
        newErrorCount.toString(),
      );

      if (newErrorCount <= 3) {
        console.error(
          `API error (Attempt ${newErrorCount}/3) while authenticated. Triggering full page reload for recovery.`,
          result.error,
        );
        if (isExcluded()) {
          console.log("Route is excluded. Skipping error recovery reload.");
        } else if (!ENABLE_ERROR_RELOAD) {
          console.log(
            "Consecutive API errors found, but ENABLE_ERROR_RELOAD is false. Skipping.",
          );
        } else {
          window.location.reload();
        }
      } else {
        console.error(
          "Maximum consecutive reloads (3) reached. Auto-recovery stopped to prevent loop.",
        );
      }
    }
  }
  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  refetchOnFocus: false,
  refetchOnReconnect: false,
  tagTypes: [
    "Users",
    "Contacts",
    "Publications",
    "Partners",
    "Volunteers",
    "SiteContent",
    "Events",
    "Payment",
    "MembershipPlan",
    "EmergencyContact",
    "Completeness",
  ],
  endpoints: (builder) => ({}),
});
