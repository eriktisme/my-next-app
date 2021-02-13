import { DefaultLayout, GuestLayout } from '@ui/layouts'
import { Page } from '@ui/page'
import { Loader } from '@ui/loader'
import { NextPage } from 'next'
import { useState } from 'react'
import { NotificationsLogging } from '@apps/notifications'
import Head from 'next/head'

interface DashboardPageProps {}

const Dashboard: NextPage<DashboardPageProps> = () => {
  const [loading, setLoading] = useState(true)

  setTimeout(() => setLoading(false), 1000)

  return (
    <DefaultLayout>
      <Head>
        <title>Notifications</title>
      </Head>
      <Loader loading={loading}>
        <NotificationsLogging>
          <Page>Notifications</Page>
        </NotificationsLogging>
      </Loader>
    </DefaultLayout>
  )
}

export default Dashboard
