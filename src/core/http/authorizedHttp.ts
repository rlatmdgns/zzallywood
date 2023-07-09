import Axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API

const axios = Axios.create({
  baseURL: API_URL,
})

export const http = {
  get: function get<Response = unknown>(url: string) {
    return axios.get<Response>(url).then((res: any) => res.data)
  },
  post: function post<Request = any, Response = unknown>(
    url: string,
    data?: Request
  ) {
    return axios.post<Response>(url, { data }).then((res) => res.data)
  },
  put: <Request = any, Response = unknown>(url: string, data: Request) => {
    return axios.put<Response>(url, data).then((res) => res.data)
  },
  delete: <Request, Response>(url: string, data: Request) => {
    return axios.delete<Response>(url, { data: data }).then((res) => res.data)
  },
}
