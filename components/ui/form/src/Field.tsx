import { FC } from 'react'
import { cn } from '@packages/utils'

export const Field: FC = ({ children }) => (
  <label className={cn('block', 'mb-6', 'w-full')}>{children}</label>
)
