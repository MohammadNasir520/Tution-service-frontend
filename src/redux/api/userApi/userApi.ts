
import { api } from "../baseApi";

const userApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllUser: builder.query({
            query: () =>({
                url:"/users",
                method:"GET"
            })
        })
    }),
})

export const { useGetAllUserQuery } = userApi