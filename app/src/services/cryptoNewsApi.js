// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://bing-news-search1.p.rapidapi.com/news',
//   params: {
//     safeSearch: 'Off',
//     textFormat: 'Raw'
//   },
//   headers: {
//     'X-BingApis-SDK': 'true',
//     'X-RapidAPI-Key': '30bc4a8d55msh69046ed39ab7765p11bf7fjsnf99559da015b',
//     'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders={
  'X-BingApis-SDK': 'true',
  'X-RapidAPI-Key': '30bc4a8d55msh69046ed39ab7765p11bf7fjsnf99559da015b',
  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}
const baseUrl= 'https://bing-news-search1.p.rapidapi.com'

const createRequest=(url)=>({url,headers:cryptoNewsHeaders})

export const cryptoNewsApi=createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints:(builder)=>({
    getCryptoNews: builder.query({
      query:({newsCategory, count})=>createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
    })
  })
});

export const { useGetCryptoNewsQuery }=cryptoNewsApi;