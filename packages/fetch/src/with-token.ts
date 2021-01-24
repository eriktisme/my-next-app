import { fetch } from './fetch'
import Cookie from 'js-cookie'

export const withToken = async (): Promise<Response | string> => {
  const token = Cookie.get('XSRF-TOKEN')

  if (token) {
    return new Promise((resolve) => resolve(token))
  }

  return fetch('/sanctum/csrf-cookie', {
    method: 'GET',
  })
}
