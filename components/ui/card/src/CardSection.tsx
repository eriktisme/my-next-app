import { FC } from 'react'
import { cn } from '@packages/utils'

export const CardSection: FC = ({ children }) => (
  <div
    className={cn(
      'border-b',
      'border-gray-200',
      'last:border-b-0',
      'p-4',
      'md:p-8',
      'lg:p-10'
    )}
  >
    {children}
  </div>
)
