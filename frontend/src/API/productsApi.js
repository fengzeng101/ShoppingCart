import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {BASE_URL} from "../common/contants"
// RTK Query data fetching API, different way to using redux toolkit.
export const productsApi = createApi({
    reducerPath:"productsApi",
    baseQuery:fetchBaseQuery({baseUrl:BASE_URL}),
    endpoints:(builder)=>({
        getAllProducts:builder.query({
            query:()=>"products",
        })

    })
})

export const {useGetAllProductsQuery} = productsApi