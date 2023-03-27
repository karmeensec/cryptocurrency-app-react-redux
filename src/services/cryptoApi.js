
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {

    'X-RapidAPI-Key': '3722a6f74cmsh8ecb6399edd3c2bp1765f0jsnb50a922caba7',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'

}

const baseUrl = 'https://coinranking1.p.rapidapi.com/';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })


export const cryptoApi = createApi({

    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({

        getCryptos: builder.query({
            query: (counter)=> createRequest(`/coins?limit=${counter}`)
        }),

        getCryptoDetails: builder.query({
            query: (coinId)=> createRequest(`/coin/${coinId}`)
        }),

    })

});
  
export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery
} = cryptoApi;