import { api } from "../baseApi";
import { tagsType } from "@/redux/tagsType";

const faqUrl = "/faqs";

const faqApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // create
    createfaq: builder.mutation({
      query: (data) => ({
        url: `${faqUrl}/`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagsType.faq],
    }),
    // get all
    getAllfaq: builder.query({
      query: () => ({
        url: `${faqUrl}`,
        method: "GET",
      }),
      providesTags: [tagsType.faq],
    }),

    // get single
    getSinglefaq: builder.query({
      query: (id) => ({
        url: `${faqUrl}/${id}`,
        method: "GET",
      }),
      providesTags: [tagsType.faq],
    }),
    //update single
    updateSinglefaq: builder.mutation({
      query: ({ data, id }) => ({
        url: `${faqUrl}/${id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagsType.faq],
    }),

    //delete
    deletefaq: builder.mutation({
      query: (id) => ({
        url: `${faqUrl}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagsType.faq],
    }),
  }),
});

export const {
  useCreatefaqMutation,
  useGetAllfaqQuery,
  useDeletefaqMutation,
  useGetSinglefaqQuery,
  useUpdateSinglefaqMutation,
} = faqApi;
