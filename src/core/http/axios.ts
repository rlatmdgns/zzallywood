import Axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API

export const defaultAxios = () => {
  const client = Axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': `application/json`,
      Accept: `application/json`,
    },
  })
  // client.defaults.headers.common.authorization = `Bearer ${credentials.token}`;
  return client
}

export const unAuthAxios = Axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': `application/json`,
    Accept: `application/json`,
  },
})
