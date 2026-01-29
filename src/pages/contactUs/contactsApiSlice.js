import { apiSlice } from "../../app/api/apiSlice";

export const contactsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => "/contacts",
      providesTags: ["Contacts"],
    }),
    createContact: builder.mutation({
      query: (data) => ({
        url: "/contacts",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});

export const { useGetContactsQuery, useCreateContactMutation } =
  contactsApiSlice;
