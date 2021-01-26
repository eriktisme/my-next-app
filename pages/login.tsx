import { useUser } from '@packages/user'
import { fetch, withToken } from '@packages/fetch'
import { FormEvent, useState } from 'react'
import Head from 'next/head'
import { cn } from '@packages/utils'
import { Card, CardSection } from '@ui/card'
import { GuestLayout } from '@ui/layouts'
import { Button } from '@ui/button'
import { GetServerSideProps } from 'next'
import { Field, Label } from '@ui/form'
import { Input } from '@ui/form/src/Input'

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
        fetch('/login', {
          method: 'POST',
          data: {
            email,
            password,
          },
        })
      )
    } catch (e) {
      console.log(e.errors)
    } finally {
      setBusy(false)
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
              <Field>
                <Label>Email</Label>
                <Input
                  type={'email'}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Field>
              <Field>
                <Label>Password</Label>
                <Input
                  type={'password'}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Field>
              <Button
                type={'submit'}
                busy={busy}
                block={true}
                rounded={true}
                style={cn('bg-blue-400', 'hover:bg-blue-500', 'text-white')}
              >
                Sign in
              </Button>
            </form>
          </CardSection>
        </Card>
      </div>
    </GuestLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  await withToken()

  return {
    props: {},
  }
}

export default Login
