import { FC } from 'react'
import { NotificationItemInterface } from '../types'
import { Card, CardSection } from '@ui/card'
import { cn, timeSince } from '@packages/utils'

export const NotificationItem: FC<{
  notification: NotificationItemInterface
}> = ({ notification }) => (
  <div className={cn('mb-3', 'last:mb-0')}>
    <Card>
      <CardSection spacing={'p-3'}>
        <div className={cn('min-w-0', 'flex-initial')}>
          <div className={cn('flex')}>
            <div
              dangerouslySetInnerHTML={{ __html: notification.message }}
              className={cn(
                'cursor-pointer',
                'flex-auto',
                'prose',
                'prose-sm',
                notification.isRead ? 'text-gray-400' : ''
              )}
            />
            <div className={cn('pl-2')}>x</div>
          </div>
          <div
            className={cn(
              'text-sm',
              'mt-2',
              notification.isRead ? 'opacity-50' : ''
            )}
          >
            {timeSince(notification.createdAt)}
          </div>
        </div>
      </CardSection>
    </Card>
  </div>
)
