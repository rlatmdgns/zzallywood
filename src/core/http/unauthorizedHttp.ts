import { unAuthAxios } from './axios'

export const unauthorizedHttp = {
  get: <Response = unknown>(url: string) => {
    return unAuthAxios.get<Response>(url).then((res) => res.data)
  },
  post: <Request = any, Response = unknown>(url: string, data: Request) => {
    return unAuthAxios.post<Response>(url, data).then((res) => res.data)
  },
  put: <Request = any, Response = unknown>(url: string, data: Request) => {
    return unAuthAxios.put<Response>(url, data).then((res) => res.data)
  },
  delete: <Request = any, Response = unknown>(url: string, data: Request) => {
    return unAuthAxios.delete<Response>(url, data).then((res) => res.data)
  },
}
