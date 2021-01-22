import { FC } from 'react'
import { cn } from '@packages/utils'

export const Button: FC<{
  style?: string
  type?: 'submit' | 'button' | 'reset'
  block?: boolean
  rounded?: boolean
  busy?: boolean
}> = ({
  style,
  type = 'submit',
  block = false,
  busy = false,
  rounded = false,
  children,
}) => {
  return (
    <button
      type={type}
      disabled={busy}
      className={cn(
        'px-3',
        'py-2',
        'align-middle',
        'border',
        'border-transparent',
        'cursor-pointer',
        'text-center',
        'text-base',
        'transition-all',
        'appearance-none',
        'outline-none',
        'focus:shadow-outline',
        style,
        block ? 'w-full' : '',
        rounded ? 'rounded' : '',
        busy ? 'cursor-not-allowed opacity-50' : ''
      )}
    >
      {children}
    </button>
  )
}
