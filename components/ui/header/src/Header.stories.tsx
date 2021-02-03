import { VFC } from 'react'
import { Meta } from '@storybook/react'
import { Header } from './Header'

export default {
  title: 'Components/Ui/Header',
  component: Header,
} as Meta

export const Default: VFC = () => <Header />
