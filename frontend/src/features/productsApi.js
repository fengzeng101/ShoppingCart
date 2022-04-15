import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"
// RTK Query data fetching API, new way to using redux toolkit.
export const productsApi = createApi({
    reducerPath:"productsApi",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:5000"}),
    endpoints:(builder)=>({
        getAllProducts:builder.query({
            query:()=>"products",
        })

    })
})

export const {useGetAllProductsQuery} = productsApi