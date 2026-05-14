import { apiSlice } from "../../../app/api/apiSlice";

export const duesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDues: builder.query({
      query: (params) => ({
        url: "/dues",
        params,
      }),
      providesTags: ["Due"],
    }),
    getMyDues: builder.query({
      query: (params) => ({
        url: "/dues/my",
        params,
      }),
      providesTags: ["Due"],
    }),
    importDues: builder.mutation({
      query: (data) => ({
        url: "/dues/import",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Due"],
    }),
    createDue: builder.mutation({
      query: (data) => ({
        url: "/dues",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Due"],
    }),
  }),
});

export const { 
  useGetDuesQuery, 
  useGetMyDuesQuery,
  useImportDuesMutation, 
  useCreateDueMutation 
} = duesApiSlice;
