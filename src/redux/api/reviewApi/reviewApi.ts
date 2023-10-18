import { api } from "../baseApi";
import { tagsType } from "@/redux/tagsType";

const reviewUrl = "/reviews";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // create
    createReview: builder.mutation({
      query: (data) => ({
        url: `${reviewUrl}/`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagsType.review],
    }),
    // get all
    getAllReview: builder.query({
      query: () => ({
        url: `${reviewUrl}`,
        method: "GET",
      }),
      providesTags: [tagsType.review],
    }),

    // get single
    //  getSinglereview: builder.query({
    //   query: (id) => ({
    //     url: `${reviewUrl}/${id}`,
    //     method:"GET"
    //   }),
    //  providesTags:[tagsType.review]
    // }),
    //   //update single
    //  updateSinglereview: builder.mutation({
    //   query: ({data,id}) => ({
    //     url: `${reviewUrl}/${id}`,
    //    method:"PATCH",
    //    data:data,

    //   }),
    // invalidatesTags:[tagsType.review]
    // }),

    // //delete
    //   deletereview: builder.mutation({
    //   query: (id) => ({
    //     url: `${reviewUrl}/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags:[tagsType.review]
    // }),
  }),
});

export const { useCreateReviewMutation, useGetAllReviewQuery } = authApi;
