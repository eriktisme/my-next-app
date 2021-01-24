import { cn } from '@packages/utils'
import { ChangeEvent, FC } from 'react'

export const Input: FC<{
  value: string | number | readonly string[] | undefined
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  type?: string
  placeholder?: string
  label?: string
}> = ({ value, type = 'text', onChange, placeholder, label }) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    aria-label={label}
    className={cn(
      'block',
      'rounded',
      'p-2',
      'w-full',
      'leading-normal',
      'align-middle',
      'text-base',
      'bg-clip-padding',
      'appearance-none',
      'outline-none',
      'border',
      'transition-all',
      'focus:shadow-outline'
    )}
  />
)
