import { apiSlice } from "../../../../app/api/apiSlice";

export const membershipPlansApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMembershipPlans: builder.query({
      query: ({ membershipLevel, chapterId } = {}) => {
        const params = new URLSearchParams();
        if (membershipLevel) params.set("membershipLevel", membershipLevel);
        if (chapterId) params.set("chapterId", chapterId);
        const query = params.toString();
        return query
          ? `/membership-plans?${query}`
          : "/membership-plans";
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ _id }) => ({ type: "MembershipPlan", id: _id })),
              { type: "MembershipPlan", id: "LIST" },
            ]
          : [{ type: "MembershipPlan", id: "LIST" }],
    }),
    createMembershipPlan: builder.mutation({
      query: (initialPlan) => ({
        url: "/membership-plans",
        method: "POST",
        body: initialPlan,
      }),
      invalidatesTags: [{ type: "MembershipPlan", id: "LIST" }],
    }),
    updateMembershipPlan: builder.mutation({
      query: (initialPlan) => ({
        url: `/membership-plans/${initialPlan.id}`,
        method: "PUT",
        body: initialPlan,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "MembershipPlan", id: arg.id },
        { type: "MembershipPlan", id: "LIST" },
      ],
    }),
    deleteMembershipPlan: builder.mutation({
      query: (id) => ({
        url: `/membership-plans/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "MembershipPlan", id: arg.id },
        { type: "MembershipPlan", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetMembershipPlansQuery,
  useCreateMembershipPlanMutation,
  useUpdateMembershipPlanMutation,
  useDeleteMembershipPlanMutation,
} = membershipPlansApiSlice;
