import { VFC } from 'react'
import { Button } from './Button'
import { Meta } from '@storybook/react'
import { cn } from '@packages/utils'

export default {
  title: 'Components/Ui/Button',
  component: Button,
} as Meta

export const Default: VFC = () => (
  <Button style={cn('bg-blue-400', 'hover:bg-blue-500', 'text-white')}>
    Button
  </Button>
)

export const Busy: VFC = () => (
  <Button
    busy={true}
    style={cn('bg-blue-400', 'hover:bg-blue-500', 'text-white')}
  >
    Button
  </Button>
)

export const Rounded: VFC = () => (
  <Button
    rounded={true}
    style={cn('bg-blue-400', 'hover:bg-blue-500', 'text-white')}
  >
    Button
  </Button>
)

export const Block: VFC = () => (
  <Button
    block={true}
    style={cn('bg-blue-400', 'hover:bg-blue-500', 'text-white')}
  >
    Button
  </Button>
)
