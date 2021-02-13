import useSWR from 'swr'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { fetch } from '@packages/fetch'

export const useUser = ({ redirectTo = '', redirectIfFound = false } = {}) => {
  const { pathname, push, replace } = useRouter()

  const { data: user, mutate: mutateUser } = useSWR('/api/user', fetch, {
    onError: async (error) => {
      if (error.status === 401 && !['/login'].includes(pathname)) {
        await replace('/login')
      }
    },
    onErrorRetry: (_, key) => {
      if (key === '/api/v1/user') {
        return
      }
    },
  })

  useEffect(() => {
    // no redirect needed, just return.
    // no user data yet, fetch in progress, logged in or not, then don't do anything yet.
    if (!redirectTo || !user) {
      return
    }

    if (
      // If redirect to is set, redirect if the uer was not found.
      (redirectTo && !redirectIfFound && !user) ||
      // If redirect if found is also set, redirect if the user was found.
      (redirectIfFound && user)
    ) {
      push(redirectTo)
    }
  }, [user, redirectIfFound, redirectTo])

  return { user, mutateUser }
}
