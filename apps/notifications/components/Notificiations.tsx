import { FC, useState } from 'react'
import { Page } from '@ui/page'
import { Loader } from '@ui/loader'
import { cn } from '@packages/utils'
import { NotificationItem } from './notifications-list/NotificationItem'
import { NotificationItemInterface } from './types'

export const Notifications: FC = () => {
  const [loading, setLoading] = useState(true)

  setTimeout(() => setLoading(false), 1000)

  const notifications: Array<NotificationItemInterface> = [
    {
      id: 1,
      message:
        'At <b>...</b> we executed an arbitrage opportunity and made <b>...</b> BTC.',
      createdAt: new Date('2021-02-13 16:00:00'),
      isRead: false,
    },
    {
      id: 2,
      message:
        'At <b>...</b> we executed an arbitrage opportunity and made <b>...</b> BTC.',
      createdAt: new Date('2020-12-12 00:00:00'),
      isRead: true,
    },
  ]

  return (
    <Loader loading={loading}>
      <Page
        header={
          <div className={cn('flex', 'justify-center', 'items-center')}>
            <h1 className={cn('prose', 'prose-xl', 'font-semibold')}>
              Notifications
            </h1>
          </div>
        }
      >
        <div>
          {notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
            />
          ))}
        </div>
      </Page>
    </Loader>
  )
}
