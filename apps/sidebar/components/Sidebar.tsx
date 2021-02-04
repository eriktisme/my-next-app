import { FC } from 'react'
import { cn } from '@packages/utils'
import { Link } from './Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faUserCircle } from '@fortawesome/free-regular-svg-icons'
import { useSidebar } from '../hooks/use-sidebar'

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
          'items-center',
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
          <Link href={'/dashboard'} as={'dashboard'}>
            <FontAwesomeIcon icon={faLightbulb} />
          </Link>
        </div>
        <div className={cn('flex', 'flex-none', 'items-center')}>
          <Link href={'/account/profile'}>
            <FontAwesomeIcon icon={faUserCircle} />
          </Link>
        </div>
      </div>
    </aside>
  )
}
