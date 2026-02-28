import { apiSlice } from "./apiSlice";

export const emergencyContactsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMyEmergencyContact: builder.query({
      query: () => "/emergency-contacts",
      providesTags: ["EmergencyContact"],
    }),
    updateMyEmergencyContact: builder.mutation({
      query: (data) => ({
        url: "/emergency-contacts",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["EmergencyContact"],
    }),
  }),
});

export const {
  useGetMyEmergencyContactQuery,
  useUpdateMyEmergencyContactMutation,
} = emergencyContactsApiSlice;
