import { api } from "../baseApi";
import { tagsType } from "@/redux/tagsType";

const tuitionPostUrl = "/tuition-posts";

const tuitionApi = api.injectEndpoints({
  endpoints: (builder) => ({
    //create
    createTuitionPost: builder.mutation({
      query: (data) => ({
        url: `${tuitionPostUrl}`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagsType?.tuitionPost],
    }),
    //update
    updateTuitionPost: builder.mutation({
      query: ({ id, data }) => ({
        url: `${tuitionPostUrl}/${id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagsType?.tuitionPost],
    }),

    //get All
    getAllTuitionPost: builder.query({
      query: (data: any) => ({
        url: `${tuitionPostUrl}`,
        method: "GET",
        params: data,
      }),
      providesTags: [tagsType?.tuitionPost],
    }),

    // get single
    getSingleTuitionPost: builder.query({
      query: (id) => ({
        url: `${tuitionPostUrl}/${id}`,
        method: "GET",
      }),
      providesTags: [tagsType?.tuitionPost],
    }),
  }),
});

export const {
  useCreateTuitionPostMutation,
  useUpdateTuitionPostMutation,
  useGetAllTuitionPostQuery,
  useGetSingleTuitionPostQuery,
} = tuitionApi;
