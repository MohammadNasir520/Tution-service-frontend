
import { api } from "../baseApi";
import { tagsType } from "@/redux/tagsType";

const serviceUrl = "/services";

const serviceApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // create
    createService: builder.mutation({
      query: (data) => ({
        url: `${serviceUrl}/`,
        method: "POST",
        data: data,
       
        
      }),
      invalidatesTags:[tagsType.service]
    }),
    // get all
     getAllService: builder.query({
      query: () => ({
        url: `${serviceUrl}`,
        method:"GET"
      }),
      providesTags:[tagsType.service]
    }),
  
    // get single
     getSingleService: builder.query({
      query: (id) => ({
        url: `${serviceUrl}/${id}`,
        method:"GET"
      }),
     providesTags:[tagsType.service]
    }),
      //update single
     updateSingleService: builder.mutation({
      query: ({data,id}) => ({
        url: `${serviceUrl}/${id}`,
       method:"PATCH",
       data:data,
        
      }),
    invalidatesTags:[tagsType.service]
    }),

    //delete 
      deleteService: builder.mutation({
      query: (id) => ({
        url: `${serviceUrl}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags:[tagsType.service]
    }),
    
  }),
});

export const { useCreateServiceMutation ,useGetAllServiceQuery,useDeleteServiceMutation,useGetSingleServiceQuery,useUpdateSingleServiceMutation} = serviceApi;
