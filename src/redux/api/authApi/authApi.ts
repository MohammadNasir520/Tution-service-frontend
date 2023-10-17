import { api } from "../baseApi";


// const authUrl = "/auth"

// const authApi = api.injectEndpoints({
//     endpoints: (builder) => ({
       
//         login: builder.mutation({
//             query: (data) =>({
//                 url:`${authUrl}/signin`,
//                 method:"POST",
//                 body:data,
//             })
//         })
//     }),
// })

// export const { useLoginMutation } = authApi



const AUTH_URL = "/auth";

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
        query: (data) => ({
            url:`${ AUTH_URL}/signin`,
            method: "POST",
            data: data
        }),
        
    }),
  }),
  
})

export const { useLoginMutation } = authApi