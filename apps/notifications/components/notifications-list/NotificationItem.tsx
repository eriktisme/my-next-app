import { FC } from 'react'
import { NotificationItemInterface } from '../types'
import { Card, CardSection } from '@ui/card'
import { cn, timeSince } from '@packages/utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { Dropdown } from '@ui/dropdown'

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
                notification.isRead ? 'text-gray-400' : ''
              )}
            />
            <div className={cn('pl-2', 'relative')}>
              <Dropdown
                button={
                  <button
                    type={'button'}
                    className={cn(
                      'opacity-0',
                      'hover:opacity-100',
                      'border-0',
                      'rounded',
                      'inline-flex',
                      'justify-center',
                      'items-center',
                      'transition-all',
                      'relative',
                      'w-6',
                      'h-6',
                      'cursor-pointer'
                    )}
                  >
                    <FontAwesomeIcon icon={faEllipsisV} />
                  </button>
                }
              >
                <span
                  className={cn(
                    'block',
                    'px-4',
                    'py-2',
                    'hover:bg-gray-100',
                    'cursor-pointer'
                  )}
                  role={'menuitem'}
                >
                  {notification.isRead ? 'Mark as unread' : 'Mark as read'}
                </span>
              </Dropdown>
            </div>
          </div>
          <div className={cn('mt-2', notification.isRead ? 'opacity-50' : '')}>
            {timeSince(notification.createdAt)}
          </div>
        </div>
      </CardSection>
    </Card>
  </div>
)
