import { defaultAxios } from './axios'

export const authorizedHttp = {
  get: <Response = unknown>(url: string) => {
    return defaultAxios()
      .get<Response>(url)
      .then((res) => res.data)
  },
  post: <Request = any, Response = unknown>(url: string, data: Request) => {
    return defaultAxios()
      .post<Response>(url, data)
      .then((res) => res.data)
  },
  put: <Request = any, Response = unknown>(url: string, data: Request) => {
    return defaultAxios()
      .put<Response>(url, data)
      .then((res) => res.data)
  },
  delete: <Request = any, Response = unknown>(url: string, data: Request) => {
    return defaultAxios()
      .delete<Response>(url, data)
      .then((res) => res.data)
  },
}
