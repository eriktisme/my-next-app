import { FC } from 'react'
import { cn } from '@packages/utils'
import { Sidebar, useSidebar } from '@apps/sidebar'

export const DefaultLayout: FC = ({ children }) => {
  const { open: sidebarIsOpen, toggle } = useSidebar()

  return (
    <div
      className={cn('w-full', 'h-full', 'overflow-hidden', 'flex', 'flex-col')}
    >
      <div className={cn('flex', 'h-full', 'relative')}>
        <Sidebar />
        <div
          className={cn(
            'relative',
            'flex',
            'flex-auto',
            'flex-col',
            'h-full',
            'max-w-full',
            'transform',
            'transition-all',
            'overflow-hidden'
          )}
          style={
            sidebarIsOpen
              ? {
                  transform: 'translateX(70px)',
                }
              : {}
          }
        >
          {children}
        </div>
        <div
          onClick={() => toggle(!sidebarIsOpen)}
          className={cn(
            'absolute',
            'top-0',
            'left-0',
            'w-full',
            'h-full',
            'z-1',
            'cursor-pointer',
            'bg-gray-50',
            'transition-all',
            'cursor-pointer',
            sidebarIsOpen
              ? cn('visible', 'opacity-80')
              : cn('invisible', 'opacity-0')
          )}
          style={
            sidebarIsOpen
              ? {
                  transform: 'translateX(70px)',
                }
              : {}
          }
        />
      </div>
    </div>
  )
}
