import { IMeta } from '@/types/commin'
import { createApi } from '@reduxjs/toolkit/query'
import type { BaseQueryFn } from '@reduxjs/toolkit/query'

import type { AxiosRequestConfig, AxiosError } from 'axios'
import { instance  as axiosInstance} from './axiosInstance'


//amar code
export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' }
  ): BaseQueryFn<
    {
      url: string
    
      method: AxiosRequestConfig['method']
      data?: AxiosRequestConfig['data']
      params?: AxiosRequestConfig['params']
      headers?: AxiosRequestConfig['headers']
      meta?: IMeta
      contentType?:string
    },

    
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, headers ,contentType}) => {
    try {
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers:{contentType:contentType},

      })
      return { data: result.data }
    } catch (axiosError) {
      const err = axiosError as AxiosError
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      }
    }
  }

//module code
// export const axiosBaseQuery =
//   (
//     { baseUrl }: { baseUrl: string } = { baseUrl: '' }
//   ): BaseQueryFn<
//     {
//       url: string
//       method: AxiosRequestConfig['method']
//       data?: AxiosRequestConfig['data']
//           params?: AxiosRequestConfig['params']
//       meta?: IMeta
//       contentType?: string
//     },
//     unknown,
//     unknown
//   > =>
//   async ({ url, method, data, params, contentType }) => {
//     try {
//       const result = await axiosInstance({
//         url: baseUrl + url, method, data, params, headers: {
//         contentType: contentType || "application/json"
//       } })
//       return { data: result.data }
//     } catch (axiosError) {
//       let err = axiosError as AxiosError
//       return {
//         error: {
//           status: err.response?.status,
//           data: err.response?.data || err.message,
//         },
//       }
//     }
//   }



