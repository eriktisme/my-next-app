import { DefaultLayout, GuestLayout } from '@ui/layouts'
import { Page } from '@ui/page'
import { Loader } from '@ui/loader'
import { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'

interface DashboardPageProps {}

const Dashboard: NextPage<DashboardPageProps> = () => {
  const [loading, setLoading] = useState(true)

  setTimeout(() => setLoading(false), 1000)

  return (
    <DefaultLayout>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Loader loading={loading}>
        <Page>Dashboard</Page>
      </Loader>
    </DefaultLayout>
  )
}

export default Dashboard
