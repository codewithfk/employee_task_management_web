import axios from "axios";

import { axiosError } from "./axiosError";
import { store } from "../redux/store";


const axiosInstance = axios.create({
  timeout: 30000,
  timeoutErrorMessage:
    "Network request timed out. The app could not connect to the server. Please make sure you are connected with a good network.",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "ngrok-skip-browser-warning": "hello",
  },
});


export const BASE_URL = "http://127.0.0.1:5080";

axiosInstance.interceptors.request.use(
  (request: any) => {
    try {
      const userStoreData = store.getState()?.userReducer;
      let token = userStoreData?.token;
      request.baseURL = BASE_URL;
      if (request.headers) {
        if (!request.headers.Authorization) {
          request.headers.Authorization = `Bearer ${token}`;
        }
      }
      return request;
    } catch (error) {
      console.error("error", error);
    }
  },
  (error) => {
    throw error;
  }
);
// Add a response interceptor
axiosInstance.interceptors.response.use(
  (res) => {
    if ([200, 201].includes(res.status)) {
      return res;
    } else {
      throw Error;
    }
  },
  (err) => axiosError(err)
);
export { axiosInstance };
