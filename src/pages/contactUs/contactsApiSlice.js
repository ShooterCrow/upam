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
    respondToContact: builder.mutation({
      query: ({ id, response }) => ({
        url: `/contacts/${id}`,
        method: "PUT",
        body: { response },
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useCreateContactMutation,
  useRespondToContactMutation,
} = contactsApiSlice;
