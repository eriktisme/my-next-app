import { cloneElement, FC, ReactElement } from 'react'
import { cn } from '@packages/utils'
import { useIsDropdownVisible } from './dropdown-visible'

export const Dropdown: FC<{
  button: ReactElement
}> = ({ button, children }) => {
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible,
  } = useIsDropdownVisible(false)

  button = cloneElement(button, {
    className: cn(
      button.props.className,
      isComponentVisible ? 'opacity-100' : ''
    ),
    onClick: () => setIsComponentVisible(!isComponentVisible),
  })

  return (
    <>
      {button}
      <div
        className={cn(
          'origin-top-right',
          'absolute',
          'right-0',
          'mt-2',
          'w-56',
          'rounded-md',
          'shadow-lg',
          'bg-white',
          'ring-1',
          'ring-black',
          'ring-opacity-5',
          isComponentVisible ? '' : 'hidden'
        )}
        ref={ref}
      >
        <div
          className={cn('py-1')}
          role={'menu'}
          aria-orientation={'vertical'}
          aria-labelledby={'options-menu'}
        >
          {children}
        </div>
      </div>
    </>
  )
}
