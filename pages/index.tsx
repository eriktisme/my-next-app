import { useUser } from '@packages/user'
import { GetServerSideProps } from 'next'
import { withToken } from '@packages/fetch'

const Index = () => {
  const { user } = useUser({
    redirectTo: 'login',
  })

  if (!user) {
    return <div>Loading</div>
  }

  return <div>Index</div>
}

export const getServerSideProps: GetServerSideProps = async () => {
  await withToken()

  return {
    props: {},
  }
}

export default Index
