import { useUser } from '../packages/user/use-user'

const Index = () => {
  const { user } = useUser({
    redirectTo: '/login',
  })

  if (!user) {
    return <div>Loading</div>
  }

  return <div>Index</div>
}

export default Index
