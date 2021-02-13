import { useUser } from '@packages/user'
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

interface IndexPageProps {}

const Index: NextPage<IndexPageProps> = () => {
  const { user } = useUser({
    redirectTo: 'login',
  })

  if (!user) {
    return <div>Loading</div>
  }

  const { push } = useRouter()

  push("/dashboard")
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  }
}

export default Index
