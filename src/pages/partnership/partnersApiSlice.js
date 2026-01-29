import { apiSlice } from "../../app/api/apiSlice";

export const partnersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPartners: builder.query({
      query: () => "/partners",
      providesTags: ["Partners"],
    }),
    createPartner: builder.mutation({
      query: (data) => ({
        url: "/partners",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Partners"],
    }),
  }),
});

export const { useGetPartnersQuery, useCreatePartnerMutation } =
  partnersApiSlice;
