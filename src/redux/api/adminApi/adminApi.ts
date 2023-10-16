import { getFromLocalStorage } from "@/utils/Local-storage";
import { api } from "../apiSlice";
import { authKey } from "@/constant/storage-key";

const adminUrl = "/admins";
const token = getFromLocalStorage(authKey);
console.log("token",token)
const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
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
    }),
    getAllAdmin: builder.query({
      query: (data) => ({
        url: `${adminUrl}`,
       
        headers: new Headers({
          Authorization: token ?`${token}` : '',
          'Content-Type': 'application/json',
        }),
      }),
    }),
  }),
});

export const { useCreateAdminMutation ,useGetAllAdminQuery} = authApi;
