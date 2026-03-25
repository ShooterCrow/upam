import { apiSlice } from "./apiSlice";

export const paymentsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPayments: builder.query({
      query: () => "/payments",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ _id }) => ({ type: "Payment", id: _id })),
              { type: "Payment", id: "LIST" },
            ]
          : [{ type: "Payment", id: "LIST" }],
    }),
    getMyPayments: builder.query({
      query: () => "/payments/my-payments",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ _id }) => ({ type: "Payment", id: _id })),
              { type: "Payment", id: "MY_LIST" },
            ]
          : [{ type: "Payment", id: "MY_LIST" }],
    }),
    verifyPayment: builder.mutation({
      query: (paymentData) => ({
        url: "/payments/verify",
        method: "POST",
        body: { ...paymentData },
      }),
      invalidatesTags: [
        { type: "Payment", id: "LIST" },
        { type: "Payment", id: "MY_LIST" },
      ],
    }),
  }),
});

export const {
  useGetPaymentsQuery,
  useGetMyPaymentsQuery,
  useVerifyPaymentMutation,
} = paymentsApiSlice;
