import { api } from "../apiSlice";

const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.query({
            query: () => "/users"
        })
    }),
})

export const { useLoginQuery } = authApi