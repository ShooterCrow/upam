import { apiSlice } from "../../app/api/apiSlice";

export const volunteersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getVolunteers: builder.query({
      query: () => "/volunteers",
      providesTags: ["Volunteers"],
    }),
    createVolunteer: builder.mutation({
      query: (data) => ({
        url: "/volunteers",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Volunteers"],
    }),
  }),
});

export const { useGetVolunteersQuery, useCreateVolunteerMutation } =
  volunteersApiSlice;
