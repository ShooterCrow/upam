import { apiSlice } from "../../app/api/apiSlice";

export const verificationApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getVerifications: builder.query({
      query: () => "/verifications",
      providesTags: ["Verifications"],
    }),
    getVerificationById: builder.query({
      query: (id) => `/verifications/${id}`,
      providesTags: (result, error, id) => [{ type: "Verifications", id }],
    }),
    getMyVerification: builder.query({
      query: () => "/verifications/me",
      providesTags: ["MyVerification"],
    }),
    submitVerification: builder.mutation({
      query: (data) => ({
        url: "/verifications",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["MyVerification", "Verifications"],
    }),
    updateVerificationStatus: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/verifications/${id}/status`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Verifications", "MyVerification"],
    }),
  }),
});

export const {
  useGetVerificationsQuery,
  useGetVerificationByIdQuery,
  useGetMyVerificationQuery,
  useSubmitVerificationMutation,
  useUpdateVerificationStatusMutation,
} = verificationApiSlice;
