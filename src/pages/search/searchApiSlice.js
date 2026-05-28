import { apiSlice } from "../../app/api/apiSlice";

export const memberSearchApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    searchMembers: builder.query({
      query: (params) => ({
        url: "/member-search",
        method: "GET",
        params: params,
      }),
      providesTags: ["Users"], // Reuse Users tag to stay somewhat consistent
    }),
  }),
});

export const { useSearchMembersQuery } = memberSearchApiSlice;
