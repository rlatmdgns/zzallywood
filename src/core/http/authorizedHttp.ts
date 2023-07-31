const BASE_URL = process.env.NEXT_PUBLIC_API

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`)
  }
  return response.json()
}

export const http = {
  get: async <T = unknown>(url: string): Promise<T> => {
    const response = await fetch(`${BASE_URL}${url}`, { cache: 'no-store' })
    return handleResponse<T>(response)
  },

  post: async <T = unknown, R = unknown>(url: string, data?: T): Promise<R> => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      headers: {
        // Note: Content-Type header is automatically set by FormData
      },
      body: data instanceof FormData ? data : JSON.stringify(data),
    })
    return handleResponse<R>(response)
  },

  put: async <T = unknown, R = unknown>(url: string, data: T): Promise<R> => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'PUT',
      headers: {
        // Note: Content-Type header is automatically set by FormData
      },
      body: data instanceof FormData ? data : JSON.stringify(data),
    })
    return handleResponse<R>(response)
  },

  delete: async <T = unknown, R = unknown>(
    url: string,
    data: T
  ): Promise<R> => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'DELETE',
      headers: {
        // Note: Content-Type header is automatically set by FormData
      },
      body: data instanceof FormData ? data : JSON.stringify(data),
    })
    return handleResponse<R>(response)
  },
}
