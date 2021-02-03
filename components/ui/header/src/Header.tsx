import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useSidebar } from '@packages/sidebar'
import { cn } from '@packages/utils'

export const Header: FC<{
  maxWidth?: string | undefined
}> = ({ maxWidth = 'max-w-xl', children }) => {
  const { open, toggle } = useSidebar()

  return (
    <div className={cn('flex', 'items-center', 'w-auto', 'flex-none')}>
      <div
        className={cn(
          'flex',
          'items-center',
          'w-full',
          'flex-none',
          'mx-auto',
          'px-4',
          'py-0',
          maxWidth
        )}
      >
        <button
          onClick={() => toggle(!open)}
          type={'button'}
          className={cn('inline-block', 'text-gray-700', 'mr-2', 'md:hidden')}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        {children}
      </div>
    </div>
  )
}
