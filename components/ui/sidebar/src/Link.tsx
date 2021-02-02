import React, {
  cloneElement,
  createElement,
  PropsWithChildren,
  ReactElement,
} from 'react'
import { default as NextLink } from 'next/link'
import { useRouter } from 'next/router'
import { cn } from '@packages/utils'

export const Link = ({
  to,
  prefetch,
  children,
}: PropsWithChildren<{
  to: string | { href: string; as: string }
  prefetch?: boolean
}>) => {
  const router = useRouter()

  let className = ''

  if (typeof children !== 'string') {
    className = (children as ReactElement).props.className
  }

  if (typeof to === 'string') {
    if (router.pathname === to) {
      className = cn(className, 'bg-white', 'bg-opacity-10', 'text-white')
    }

    if (typeof children === 'string') {
      return (
        <NextLink href={to} prefetch={prefetch || false}>
          {createElement(children, { className })}
        </NextLink>
      )
    }

    return (
      <NextLink href={to} prefetch={prefetch || false}>
        {cloneElement(children as ReactElement, { className })}
      </NextLink>
    )
  }

  if (router.pathname === to.href) {
    className = cn(className, 'bg-white', 'bg-opacity-10', 'text-white')
  }

  return (
    <NextLink href={to.href} as={to.as} prefetch={prefetch || false}>
      {cloneElement(children as ReactElement, { className })}
    </NextLink>
  )
}
