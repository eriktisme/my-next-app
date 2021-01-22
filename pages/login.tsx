import { useUser } from '@packages/user/use-user'
import { fetcher } from '@packages/fetch'
import { FormEvent, useState } from 'react'
import Head from 'next/head'
import { cn } from '@packages/utils'
import { Card, CardSection } from '@ui/card'
import { GuestLayout } from '@ui/layouts'

const Login = () => {
  const { mutateUser } = useUser({
    redirectTo: '/',
    redirectIfFound: true,
  })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setBusy(true)

    try {
      await mutateUser(
        fetcher('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: {
            email,
            password,
          },
        })
      )
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <GuestLayout>
      <Head>
        <title>Login</title>
      </Head>
      <div className={cn('max-w-lg', 'w-full', 'm-auto', 'px-3', 'md:px-0')}>
        <Card>
          <CardSection>
            <form onSubmit={handleSubmit}>
              <label className={cn('block', 'mb-6', 'w-full')}>
                <span className={cn('block', 'mb-2', 'text-sm', 'font-medium')}>
                  Email
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className={cn(
                    'block',
                    'rounded',
                    'p-2',
                    'w-full',
                    'leading-normal',
                    'align-middle',
                    'text-base',
                    'bg-clip-padding',
                    'appearance-none',
                    'outline-none',
                    'border',
                    'transition-all',
                    'focus:shadow-outline'
                  )}
                />
              </label>
              <label className={cn('block', 'mb-6', 'w-full')}>
                <span className={cn('block', 'mb-2', 'text-sm', 'font-medium')}>
                  Password
                </span>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className={cn(
                    'block',
                    'rounded',
                    'p-2',
                    'w-full',
                    'leading-normal',
                    'align-middle',
                    'text-base',
                    'bg-clip-padding',
                    'appearance-none',
                    'outline-none',
                    'border',
                    'transition-all',
                    'focus:shadow-outline'
                  )}
                />
              </label>
              <button
                type={'submit'}
                disabled={busy}
                className={cn(
                  'rounded',
                  'px-3',
                  'py-2',
                  'align-middle',
                  'border',
                  'border-transparent',
                  'cursor-pointer',
                  'text-center',
                  'text-base',
                  'transition-all',
                  'appearance-none',
                  'outline-none',
                  'w-full',
                  'text-white',
                  'bg-blue-400',
                  'hover:bg-blue-500',
                  'focus:shadow-outline'
                )}
              >
                Sign in
              </button>
            </form>
          </CardSection>
        </Card>
      </div>
    </GuestLayout>
  )
}

export default Login
