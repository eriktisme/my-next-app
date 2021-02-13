import { FC } from 'react'
import { cn } from '@packages/utils'

export const Dropdown: FC<{
  open: boolean
}> = ({ open, children }) => {
  return (
    <div
      className={cn(
        'origin-top-right',
        'absolute',
        'right-0',
        'mt-2',
        'w-56',
        'rounded-md',
        'shadow-lg',
        'bg-white',
        'ring-1',
        'ring-black',
        'ring-opacity-5',
        open ? '' : 'hidden'
      )}
    >
      <div
        className={cn('py-1')}
        role={'menu'}
        aria-orientation={'vertical'}
        aria-labelledby={'options-menu'}
      >
        {children}
      </div>
    </div>
  )
}
