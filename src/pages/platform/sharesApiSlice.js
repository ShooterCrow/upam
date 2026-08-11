import { apiSlice } from "../../app/api/apiSlice";

/**
 * Share allocation endpoints.
 *
 * Read access:
 *  - A member can always read their own total (it is part of `GET /dashboard`
 *    stats and of `GET /users/:id/full-profile` stats).
 *
 * Write access (admin only — enforced server side):
 *  - POST  /users/:id/shares  → ADD `shares` to the member's current balance.
 *  - PATCH /users/:id/shares  → REPLACE the member's balance with `totalShares`.
 */
export const sharesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMemberShares: builder.query({
      query: (id) => `/users/${id}/shares`,
      providesTags: (result, error, id) => [{ type: "Shares", id }],
    }),
    assignShares: builder.mutation({
      query: ({ id, shares, note }) => ({
        url: `/users/${id}/shares`,
        method: "POST",
        body: { shares, note },
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Shares", id },
        { type: "Users", id },
        "Users",
        "Dashboard",
      ],
    }),
    updateShares: builder.mutation({
      query: ({ id, totalShares, note }) => ({
        url: `/users/${id}/shares`,
        method: "PATCH",
        body: { totalShares, note },
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Shares", id },
        { type: "Users", id },
        "Users",
        "Dashboard",
      ],
    }),
  }),
});

export const {
  useGetMemberSharesQuery,
  useAssignSharesMutation,
  useUpdateSharesMutation,
} = sharesApiSlice;
