import { FC } from 'react'
import { cn } from '@packages/utils'

export const Card: FC = ({ children }) => (
  <div className={cn('border', 'border-gray-200', 'rounded-md')}>
    {children}
  </div>
)
