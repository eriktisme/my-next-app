import { FC, ReactNode } from 'react'
import { Header } from '@ui/header'
import { cn } from '@packages/utils'

export const Page: FC<{
  header?: ReactNode
  maxWidth?: string | undefined
}> = ({ maxWidth = 'max-w-xl', header, children }) => (
  <div className={cn('h-full', 'overflow-auto', 'pt-8', 'pb-2', 'px-0')}>
    <Header maxWidth={maxWidth}>{header}</Header>
    <div
      className={cn(
        'min-h-0',
        'overflow-hidden',
        'py-3',
        typeof header === 'undefined' ? 'pt-0' : ''
      )}
    >
      <div className={cn('my-0', 'mx-auto', 'w-full', maxWidth)}>
        {children}
      </div>
    </div>
  </div>
)
