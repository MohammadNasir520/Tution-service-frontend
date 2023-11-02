import { api } from "../baseApi";
import { tagsType } from "@/redux/tagsType";

const latestUpdateUrl = "/latest-updates";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // create
    createlatestUpdate: builder.mutation({
      query: (data) => ({
        url: `${latestUpdateUrl}/`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagsType.latestUpdate],
    }),
    // get all
    getAlllatestUpdate: builder.query({
      query: () => ({
        url: `${latestUpdateUrl}`,
        method: "GET",
      }),
      providesTags: [tagsType.latestUpdate, tagsType.user],
    }),

    // get single
    getSinglelatestUpdate: builder.query({
      query: (id) => ({
        url: `${latestUpdateUrl}/${id}`,
        method: "GET",
      }),
      providesTags: [tagsType.latestUpdate],
    }),
    //update single
    updateSingleLatestUpdate: builder.mutation({
      query: ({ data, id }) => ({
        url: `${latestUpdateUrl}/${id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagsType.latestUpdate],
    }),

    //delete
    deleteLatestUpdate: builder.mutation({
      query: (id) => ({
        url: `${latestUpdateUrl}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagsType.latestUpdate],
    }),
  }),
});

export const {
  useCreatelatestUpdateMutation,
  useGetAlllatestUpdateQuery,
  useDeleteLatestUpdateMutation,
  useGetSinglelatestUpdateQuery,
  useUpdateSingleLatestUpdateMutation,
} = authApi;
