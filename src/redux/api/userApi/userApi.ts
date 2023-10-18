import { tagsType } from "@/redux/tagsType";
import { api } from "../baseApi";

const userUrl = "/users";
const userApi = api.injectEndpoints({
  endpoints: (builder) => ({

    // createUser: builder.mutation({
    //   query: (data) => ({
    //     url: `${userUrl}`,
    //     method: "POST",
    //     data: data,
    //   }),
    //   invalidatesTags: [tagsType.user],
    // }),
    getAllUser: builder.query({
      query: () => ({
        url: `${userUrl}`,
        method: "GET",
      }),
      providesTags: [tagsType.user],
    }),
    // get single
    getSingleUser: builder.query({
      query: (id) => ({
        url: `${userUrl}/${id}`,
        method: "GET",
      }),
      providesTags: [tagsType.user],
    }),
    //update single
    updateSingleUser: builder.mutation({
      query: ({ data, id }) => ({
        url: `${userUrl}/${id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagsType.user],
    }),

    deleteUser: builder.mutation({
      query: (id) => ({
        url: `${userUrl}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagsType.user],
    }),
  }),
});

export const {
  useGetAllUserQuery,
  useGetSingleUserQuery,
  useDeleteUserMutation,
  useUpdateSingleUserMutation,

} = userApi;
