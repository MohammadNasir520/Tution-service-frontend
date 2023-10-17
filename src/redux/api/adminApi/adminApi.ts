import { getFromLocalStorage } from "@/utils/Local-storage";
import { api } from "../baseApi";
import { authKey } from "@/constant/storage-key";
import { tagsType } from "@/redux/tagsType";

const adminUrl = "/admins";
const token = getFromLocalStorage(authKey);
console.log("token",token)
const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // create
    createAdmin: builder.mutation({
      query: (data) => ({
        url: `${adminUrl}/`,
        method: "POST",
        body: data,
        headers: new Headers({
          Authorization: token ? `${token}` : '',
          'Content-Type': 'application/json',
        }),
        
      }),
      invalidatesTags:[tagsType.admin]
    }),
    // get all
     getAllAdmin: builder.query({
      query: (data) => ({
        url: `${adminUrl}`,
       
        headers: new Headers({
          Authorization: token ?`${token}` : '',
          'Content-Type': 'application/json',
        }),
      }),
      providesTags:[tagsType.admin]
    }),
    //update single
     updateSingleAdmin: builder.mutation({
      query: ({data,id}) => ({
        url: `${adminUrl}/${id}`,
       method:"PATCH",
       body:data,
        headers: new Headers({
          Authorization: token ?`${token}` : '',
          'Content-Type': 'application/json',
        }),
      }),
    invalidatesTags:[tagsType.admin]
    }),
    // get single
     getSingleAdmin: builder.query({
      query: (id) => ({
        url: `${adminUrl}/${id}`,
       
        headers: new Headers({
          Authorization: token ?`${token}` : '',
          'Content-Type': 'application/json',
        }),
      }),
     providesTags:[tagsType.admin]
    }),
    

    //delete 
      deleteAdmin: builder.mutation({
      query: (id) => ({
        url: `${adminUrl}/${id}`,
        method: "DELETE",
        headers: new Headers({
          Authorization: token ? `${token}` : '',
          'Content-Type': 'application/json',
        }),
      }),
      invalidatesTags:[tagsType.admin]
    }),
    
  }),
});

export const { useCreateAdminMutation ,useGetAllAdminQuery,useDeleteAdminMutation,useGetSingleAdminQuery,useUpdateSingleAdminMutation} = authApi;
