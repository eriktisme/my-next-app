import { PropsWithChildren, ReactNode } from 'react'
import { default as NextLink } from 'next/link'
import { useRouter } from 'next/router'
import { cn } from '@packages/utils'

export const Link = ({
  href,
  as,
  prefetch,
  icon,
}: PropsWithChildren<{
  href: string
  as?: string | undefined
  prefetch?: boolean
  icon: ReactNode
}>) => {
  const router = useRouter()

  let activeClasses = ''

  if (router.pathname === href) {
    activeClasses = cn('bg-white', 'bg-opacity-10', 'text-white')
  }

  return (
    <NextLink href={href} as={as} prefetch={prefetch || false}>
      <a
        className={cn(
          'block',
          'relative',
          'rounded',
          'cursor-pointer',
          'p-2',
          'mb-2',
          'last:mb-0',
          activeClasses
        )}
      >
        <div className={cn('relative', 'inline-block', 'text-current')}>
          {icon}
        </div>
      </a>
    </NextLink>
  )
}
