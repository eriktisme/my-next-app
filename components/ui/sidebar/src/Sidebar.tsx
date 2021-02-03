import { FC } from 'react'
import { cn } from '@packages/utils'
import { Link } from './Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-regular-svg-icons'
import { useSidebar } from '@packages/sidebar'

export const Sidebar: FC = () => {
  const { open } = useSidebar()

  return (
    <aside
      className={cn(
        'absolute',
        'flex',
        'flex-none',
        'h-full',
        'z-10',
        'transform',
        'md:relative',
        'md:translate-x-0',
        'transition-all',
        open ? 'translate-x-0' : '-translate-x-full'
      )}
    >
      <div
        className={cn(
          'flex',
          'flex-col',
          'flex-none',
          'pt-8',
          'pb-4',
          'px-4',
          'bg-gray-800',
          'text-white'
        )}
        style={{
          width: '70px',
        }}
      >
        <div className={cn('flex', 'items-center', 'flex-auto', 'flex-col')}>
          <Link to={'/dashboard'}>
            <div
              className={cn(
                'block',
                'relative',
                'text-gray-500',
                'rounded',
                'cursor-pointer',
                'mb-1',
                'p-2',
                'last:mb-0'
              )}
            >
              <div
                className={cn(
                  'flex',
                  'flex-none',
                  'min-w-full',
                  'justify-center',
                  'items-center'
                )}
              >
                <FontAwesomeIcon icon={faLightbulb} />
              </div>
            </div>
          </Link>
          <Link to={'/user'}>
            <div
              className={cn(
                'block',
                'relative',
                'text-gray-500',
                'rounded',
                'cursor-pointer',
                'mb-1',
                'p-2',
                'last:mb-0'
              )}
            >
              <div
                className={cn(
                  'flex',
                  'flex-none',
                  'min-w-full',
                  'justify-center',
                  'items-center'
                )}
              >
                <FontAwesomeIcon icon={faLightbulb} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </aside>
  )
}
