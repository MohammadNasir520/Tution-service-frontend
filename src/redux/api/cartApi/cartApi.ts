import { api } from "../baseApi";
import { tagsType } from "@/redux/tagsType";

const cartUrl = "/carts";

const cartApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // create
    AddToCart: builder.mutation({
      query: (data) => ({
        url: `${cartUrl}/`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagsType.cart],
    }),
    // get all
    getAllCart: builder.query({
      query: () => ({
        url: `${cartUrl}`,
        method: "GET",
      }),
      providesTags: [tagsType.cart, tagsType.user],
    }),

    // get single
    getSinglecart: builder.query({
      query: (id) => ({
        url: `${cartUrl}/${id}`,
        method: "GET",
      }),
      providesTags: [tagsType.cart],
    }),

    //delete
    deletecart: builder.mutation({
      query: (id) => ({
        url: `${cartUrl}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagsType.cart],
    }),
  }),
});

export const {
  useAddToCartMutation,
  useGetAllCartQuery,
  useDeletecartMutation,
  useGetSinglecartQuery,
} = cartApi;
