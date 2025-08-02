import { AxiosRequestConfig } from "axios";
import { axiosInstance } from "./axiosInstance";
// /api/admin

interface APIHeaderConfig extends AxiosRequestConfig<Headers> {
  type?: "admin" | "customer";
}
export const get_api = (route: string, headers?: APIHeaderConfig) =>
  axiosInstance
    .get(
      ("/api/") + route,
      headers
    )
    .then((res: any) => {
      return res?.data;
    });
export const get_api_data = (route: string, headers?: APIHeaderConfig) =>
  axiosInstance
    .get(
      ("/api/") + route,
      headers
    )
    .then((res: any) => {
      return res?.data;
    });
export const post_api = (
  route: string,
  data?: any,
  headers?: APIHeaderConfig
) =>
  axiosInstance
    .post(
      ("/api/") + route,
      data,
      headers
    )
    .then((res: any) => {
      return res?.data;
    });
export const patch_api = (
  route: string,
  data: any,
  headers?: APIHeaderConfig
) =>
  axiosInstance
    .patch(
      ( "/api/") + route,
      data,
      headers
    )
    .then((res: any) => res?.data);
export const put_api = (
  route: string,
  data: any,
  headers?: APIHeaderConfig
) =>
  axiosInstance
    .put(
      ( "/api/") + route,
      data,
      headers
    )
    .then((res: any) => res?.data);
export const delete_api = (
  route: string,
  data?: any,
  headers?: APIHeaderConfig
) =>
  axiosInstance
    .delete(( "/api/") + route, {
      data,
      ...headers,
    })
    .then((res: any) => res?.data);

export const post_form_data = (
  route: string,
  data: any,
  headers?: APIHeaderConfig
) =>
  axiosInstance
    .post(
      ( "/api/") + route,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        ...headers,
      }
    )
    .then((res: any) => res?.data);
