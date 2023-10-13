import { api } from "../apiSlice";

const userApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllUser: builder.query({
            query: () => "/users"
        })
    }),
})

export const { useGetAllUserQuery } = userApi