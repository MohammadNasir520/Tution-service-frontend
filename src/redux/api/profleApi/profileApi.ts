
import { api } from "../baseApi";
import { tagsType } from "@/redux/tagsType";

const profileApiUrl = "/profile";

const profileApi = api.injectEndpoints({
  endpoints: (builder) => ({
   
  
  
    // get single
    getProfile: builder.query({
      query: () => ({
        url: `${profileApiUrl}`,
        method:"GET"
      }),
     providesTags:[tagsType.profile]
    }),
      //update single
     updateProfile: builder.mutation({
      query: ({data,id}) => ({
        url: `${profileApiUrl}`,
       method:"PATCH",
       data:data,
        
      }),
    invalidatesTags:[tagsType.profile]
    }),

  
    
  }),
});

export const {useGetProfileQuery,useUpdateProfileMutation } = profileApi;
