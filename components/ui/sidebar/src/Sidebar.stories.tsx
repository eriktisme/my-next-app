import { VFC } from 'react'
import { Sidebar } from './Sidebar'
import { Meta } from '@storybook/react'

export default {
  title: 'Components/Ui/Sidebar',
  component: Sidebar,
} as Meta

export const Default: VFC = () => <Sidebar />
