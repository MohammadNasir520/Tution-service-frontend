import { api } from "../baseApi";

const userApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllUser: builder.query({
            query: () => "/users"
        })
    }),
})

export const { useGetAllUserQuery } = userApi