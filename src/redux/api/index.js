import axios from "axios";

// API url with the api key
const baseURL = "https://ombdapi.com/?apiKey=ffd0c3a5";

export const apiCall = (url, data, headers, method) => {
  // return a promise
  return axios({
    method,
    url: baseURL + url,
    data,
    headers
  });
};
