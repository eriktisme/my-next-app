import { VFC } from 'react'
import { Dropdown } from './Dropdown'
import { Meta } from '@storybook/react'

export default {
  title: 'Components/Ui/Dropdown',
  component: Dropdown,
} as Meta

export const Hidden: VFC = () => <Dropdown open={false} />

export const Visible: VFC = () => <Dropdown open={true} />
