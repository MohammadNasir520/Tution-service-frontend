import { api } from "../baseApi";

const TutoroUrl = "/tutors";

const tutorsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    //create
    createTutoro: builder.mutation({
      query: (data) => ({
        url: `${TutoroUrl}`,
        method: "POST",
        data: data,
      }),
    }),

    //get All
    getAllTutor: builder.query({
      query: () => ({
        url: `${TutoroUrl}`,
        method: "GET",
      }),
    }),

    // get single
    getSingleTutoro: builder.query({
      query: (id) => ({
        url: `${TutoroUrl}/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateTutoroMutation,
  useGetAllTutorQuery,
  useGetSingleTutoroQuery,
} = tutorsApi;
