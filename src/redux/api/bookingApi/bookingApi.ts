import { api } from "../baseApi";
import { tagsType } from "@/redux/tagsType";

const bookingUrl = "/bookings";

const bookingApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // create
    createBooking: builder.mutation({
      query: (data) => ({
        url: `${bookingUrl}/`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagsType.booking],
    }),
    // get all
    getAllBooking: builder.query({
      query: () => ({
        url: `${bookingUrl}`,
        method: "GET",
      }),
      providesTags: [tagsType.booking],
    }),

    // get single
    getSingleBooking: builder.query({
      query: (id) => ({
        url: `${bookingUrl}/${id}`,
        method: "GET",
      }),
      providesTags: [tagsType.booking],
    }),
    //update single
    updateSingleBooking: builder.mutation({
      query: ({ data, id }) => ({
        url: `${bookingUrl}/${id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagsType.booking],
    }),

    //delete
    deleteBooking: builder.mutation({
      query: (id) => ({
        url: `${bookingUrl}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagsType.booking],
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useGetAllBookingQuery,
  useDeleteBookingMutation,
  useGetSingleBookingQuery,
  useUpdateSingleBookingMutation,
} = bookingApi;
