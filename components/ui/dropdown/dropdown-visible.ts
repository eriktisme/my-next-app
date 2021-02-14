import { useEffect, useRef, useState } from 'react'

export const useIsDropdownVisible = (initialVisibility: boolean) => {
  const [isComponentVisible, setIsComponentVisible] = useState(
    initialVisibility
  )
  const ref = useRef(null)

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)

    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  })

  return { ref, isComponentVisible, setIsComponentVisible }
}
