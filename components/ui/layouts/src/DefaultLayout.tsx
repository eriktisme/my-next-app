import { FC } from 'react'
import { cn } from '@packages/utils'
import { Sidebar } from '@ui/sidebar'
import { useSidebar } from '@packages/sidebar'
import { Header } from '@ui/header'

export const DefaultLayout: FC = ({ children }) => {
  const { open: sidebarIsOpen, toggle } = useSidebar()

  const toggleSidebar = () => toggle(!sidebarIsOpen)

  return (
    <div
      className={cn('w-full', 'h-full', 'overflow-hidden', 'flex', 'flex-col')}
    >
      <div className={cn('flex', 'h-full', 'relative')}>
        <Sidebar />
        <main
          className={cn(
            'flex',
            'h-full',
            'flex-auto',
            'flex-col',
            'w-full',
            'max-w-full',
            'transform',
            'transition-all'
          )}
          style={
            sidebarIsOpen
              ? {
                  transform: 'translateX(70px)',
                }
              : {}
          }
        >
          <Header />
          {children}
        </main>
        <div
          onClick={toggleSidebar}
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
