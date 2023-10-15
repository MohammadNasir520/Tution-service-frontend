import { api } from "../apiSlice";

const authUrl = "/auth"

const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
       
        login: builder.mutation({
            query: (data) =>({
                url:`${authUrl}/signin`,
                method:"POST",
                body:data,

            })
        })
    }),
})

export const { useLoginMutation } = authApi