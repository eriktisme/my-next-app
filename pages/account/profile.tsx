import { DefaultLayout } from '@ui/layouts'
import { Page } from '@ui/page'
import { Loader } from '@ui/loader'
import Head from 'next/head'

const Profile = () => (
  <DefaultLayout>
    <Head>
      <title>Account Profile</title>
    </Head>
    <Loader loading={false}>
      <Page>Profile</Page>
    </Loader>
  </DefaultLayout>
)

export default Profile
