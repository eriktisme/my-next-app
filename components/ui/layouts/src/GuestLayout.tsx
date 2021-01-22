import { FC } from 'react'
import { cn } from '@packages/utils'

export const GuestLayout: FC = ({ children }) => (
  <div
    className={cn('w-full', 'h-full', 'overflow-hidden', 'flex', 'flex-col')}
  >
    {children}
  </div>
)
