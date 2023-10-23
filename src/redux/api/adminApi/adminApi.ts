import { api } from "../baseApi";
import { tagsType } from "@/redux/tagsType";

const adminUrl = "/admins";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // create
    createAdmin: builder.mutation({
      query: (data) => ({
        url: `${adminUrl}/`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagsType.admin],
    }),
    // get all
    getAllAdmin: builder.query({
      query: () => ({
        url: `${adminUrl}`,
        method: "GET",
      }),
      providesTags: [tagsType.admin, tagsType.user],
    }),

    // get single
    getSingleAdmin: builder.query({
      query: (id) => ({
        url: `${adminUrl}/${id}`,
        method: "GET",
      }),
      providesTags: [tagsType.admin],
    }),
    //update single
    updateSingleAdmin: builder.mutation({
      query: ({ data, id }) => ({
        url: `${adminUrl}/${id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagsType.admin],
    }),

    //delete
    deleteAdmin: builder.mutation({
      query: (id) => ({
        url: `${adminUrl}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagsType.admin],
    }),
  }),
});

export const {
  useCreateAdminMutation,
  useGetAllAdminQuery,
  useDeleteAdminMutation,
  useGetSingleAdminQuery,
  useUpdateSingleAdminMutation,
} = authApi;
