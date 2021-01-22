import useSWR from 'swr'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export const useUser = ({ redirectTo = '', redirectIfFound = false } = {}) => {
  const { data: user, mutate: mutateUser } = useSWR('/api/me')
  const router = useRouter()

  useEffect(() => {
    // no redirect needed, just return.
    // no user data yet, fetch in progress, logged in or not, then don't do anything yet.
    if (!redirectTo || !user) {
      return
    }

    if (
      // If redirect to is set, redirect if the uer was not found.
      (redirectTo && !redirectIfFound && !user?.isLoggedIn) ||
      // If redirect if found is also set, redirect if the user was found.
      (redirectIfFound && user?.isLoggedIn)
    ) {
      router.push(redirectTo)
    }
  }, [user, redirectIfFound, redirectTo])

  return { user, mutateUser }
}
