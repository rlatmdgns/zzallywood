import Axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API

export const defaultAxios = () => {
  const client = Axios.create({
    baseURL: API_URL,
  })
  // client.defaults.headers.common.authorization = `Bearer ${credentials.token}`;
  return client
}

export const unAuthAxios = Axios.create({
  baseURL: API_URL,
})
