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
      query: ({ page = 1, limit = 10 } = {}) => `/payments?page=${page}&limit=${limit}`,
      providesTags: (result) =>
        result?.data
          ? [
              ...result.data.map(({ _id }) => ({ type: "Payment", id: _id })),
              { type: "Payment", id: "LIST" },
            ]
          : [{ type: "Payment", id: "LIST" }],
    }),
    getMyPayments: builder.query({
      query: ({ page = 1, limit = 10 } = {}) => `/payments/my-payments?page=${page}&limit=${limit}`,
      providesTags: (result) =>
        result?.data
          ? [
              ...result.data.map(({ _id }) => ({ type: "Payment", id: _id })),
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
