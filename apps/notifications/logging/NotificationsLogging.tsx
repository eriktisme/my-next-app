import { FC, useEffect } from 'react'
import { useLogger } from '@packages/logger'

export const NotificationsLogging: FC = ({ children }) => {
  const logger = useLogger()

  useEffect(() => {
    logger.log({
      message: 'Notification application has been loaded.',
    })
  })

  return <>{children}</>
}
