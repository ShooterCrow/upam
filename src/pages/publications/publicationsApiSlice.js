import { apiSlice } from "../../app/api/apiSlice";

export const publicationsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPublications: builder.query({
      query: (type) => ({
        url: "/publications",
        params: type ? { type } : undefined,
      }),
      providesTags: ["Publications"],
    }),
    createPublication: builder.mutation({
      query: (data) => ({
        url: "/publications",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Publications"],
    }),
  }),
});

export const { useGetPublicationsQuery, useCreatePublicationMutation } =
  publicationsApiSlice;
