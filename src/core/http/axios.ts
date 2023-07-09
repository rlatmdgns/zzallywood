import Axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API

export const defaultAxios = () => {
  return Axios.create({
    baseURL: API_URL,
  })
}
