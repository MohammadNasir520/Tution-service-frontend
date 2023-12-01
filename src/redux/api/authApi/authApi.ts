import { tagsType } from "@/redux/tagsType";
import { api } from "../baseApi";

const AUTH_URL = "/auth";

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    sendVerificationEmail: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/signup-send-verification-email`,
        method: "POST",
        data: data,
      }),
    }),
    createUser: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/signup`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagsType.user],
    }),
    login: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/signin`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagsType.user],
    }),
  }),
});

export const {
  useSendVerificationEmailMutation,
  useLoginMutation,
  useCreateUserMutation,
} = authApi;
