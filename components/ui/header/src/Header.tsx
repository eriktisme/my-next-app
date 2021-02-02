import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useSidebar } from '@packages/sidebar'

export const Header: FC = () => {
  const { open, toggle } = useSidebar()

  const toggleSidebar = () => toggle(!open)

  return (
    <div>
      <button onClick={toggleSidebar} type={'button'}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  )
}
