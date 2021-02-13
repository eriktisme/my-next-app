import { DefaultLayout } from '@ui/layouts'
import { NextPage } from 'next'
import Head from 'next/head'

import {
  Notifications as NotificationApp,
  NotificationsLogging,
} from '@apps/notifications'

interface NotificationsPageProps {}

const Notifications: NextPage<NotificationsPageProps> = () => (
  <DefaultLayout>
    <Head>
      <title>Notifications</title>
    </Head>
    <NotificationsLogging>
      <NotificationApp />
    </NotificationsLogging>
  </DefaultLayout>
)

export default Notifications
