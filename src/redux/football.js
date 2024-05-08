import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const footballApi = createApi({
    reducerPath : 'footballApi',
    baseQuery : fetchBaseQuery({
        baseUrl : 'https://jsonmock.hackerrank.com/'
    }),
    endpoints : builder => ({
        data : builder.query({
            query : (pageNumber=1) => `/api/football_matches?page=${pageNumber}`
        })
    })
})

export const {useDataQuery} = footballApi

