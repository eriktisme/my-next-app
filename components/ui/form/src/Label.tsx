import { FC } from 'react'
import { cn } from '@packages/utils'

export const Label: FC = ({ children }) => (
  <label className={cn('block', 'mb-2', 'text-sm', 'font-medium')}>
    {children}
  </label>
)
