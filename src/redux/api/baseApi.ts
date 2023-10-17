import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagsTypesLis } from "../tagsType";
import { axiosBaseQuery } from "@/helpres/axios/axios";
export const api = createApi({
    reducerPath: "api",
    baseQuery: axiosBaseQuery({
        baseUrl: `http://localhost:5000/api/v1/`,
    }),
    endpoints: () => ({}),
    tagTypes:tagsTypesLis
});
