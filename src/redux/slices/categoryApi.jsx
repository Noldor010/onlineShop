import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
 
export const categoryApi = createApi({
  reducerPath: 'categoryApi/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/'
  }),
  refetchOnFocus: true,
  endpoints: build => ({
    getCategoryRepos:build.query({
      query: () => ({
        url: 'products/categories',
        method: 'GET'
      })
    }),
  })
})

export const {useGetCategoryReposQuery} = categoryApi