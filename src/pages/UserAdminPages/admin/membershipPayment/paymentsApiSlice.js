import { apiSlice } from "../../../../app/api/apiSlice";

export const paymentsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    verifyPayment: builder.mutation({
      query: (paymentData) => ({
        url: "/payments/verify",
        method: "POST",
        body: paymentData,
      }),
      invalidatesTags: ["Payment"],
    }),
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
              { type: "Payment", id: "LIST" },
            ]
          : [{ type: "Payment", id: "LIST" }],
    }),
  }),
});

export const {
  useVerifyPaymentMutation,
  useGetPaymentsQuery,
  useGetMyPaymentsQuery,
} = paymentsApiSlice;
