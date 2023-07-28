/*const options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coins',
  params: {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    'tiers[0]': '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '50',
    offset: '0'
  },
  headers: {
    'X-RapidAPI-Key': '30bc4a8d55msh69046ed39ab7765p11bf7fjsnf99559da015b',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
};*/

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders={
  'X-RapidAPI-Key': '30bc4a8d55msh69046ed39ab7765p11bf7fjsnf99559da015b',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const baseUrl= 'https://coinranking1.p.rapidapi.com'

const createRequest=(url)=>({url,headers:cryptoApiHeaders})

export const cryptoApi=createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints:(builder)=>({
    getCryptos: builder.query({
      query:(count)=>createRequest(`/coins?limit=${count}`)
    }),
    getCryptoDetails: builder.query({
      query:(coinId)=>createRequest(`/coin/${coinId}`)
    }),
    getCryptoHistory: builder.query({
      query:({coinId, timePeriod})=>createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`)
    })
  })
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery}=cryptoApi;
