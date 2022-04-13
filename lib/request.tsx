import axios from "axios";
import Cookie from "js-cookie";

const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

request.interceptors.request.use((config: any) => {
  const token = Cookie.get("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
request.interceptors.response.use((response: any) => {
  return response;
});

export function apiRequest(url: any, params: any, query: any | null) {
  let requestUrl = "";
  if (query === null) {
    requestUrl = process.env.NEXT_PUBLIC_BASE_URL + url.relativeUrl;
  } else {
    requestUrl = process.env.NEXT_PUBLIC_BASE_URL + url.relativeUrl + query;
  }
  return axios({
    method: url.method,
    url: requestUrl,
    data: params,
  });
}

export default request;
