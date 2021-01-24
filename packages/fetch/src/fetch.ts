import axios from 'axios'

export const fetch = async (...args: Parameters<typeof axios>) => {
  const fetch = axios.create({
    baseURL: process.env.NEXT_PUBLIC_PASSPORT_SERVICE_URL,
    withCredentials: true,
  })

  try {
    const response = await fetch(...args)

    return response.data
  } catch (e) {
    if (e.response) {
      const error = new FetchError(e.response.data.message)
      error.errors = e.response.data.errors
      error.status = e.response.status

      throw error
    }

    console.log(e)
  }
}

class FetchError extends Error {
  errors: any
  status: any
}
