import { FC } from 'react'
import { cn } from '@packages/utils'

export const Loader: FC<{
  loading: boolean
  fullscreen?: boolean | undefined
}> = ({ loading, fullscreen = true, children }) =>
  loading ? (
    <div className={cn('relative', fullscreen ? 'h-full' : '')}>
      <div
        className={cn(
          'w-full',
          'h-full',
          'flex',
          'justify-center',
          'items-center'
        )}
      >
        <div
          className={cn(
            'loader',
            'ease-linear',
            'rounded-full',
            'border-4',
            'border-t-4',
            'border-gray-200',
            'animate-spin',
            'h-12',
            'w-12',
            'mx-auto'
          )}
          style={{
            borderTopColor: '#3498db',
          }}
        />
      </div>
    </div>
  ) : (
    <div className={cn('relative')}>{children}</div>
  )
