import { VFC } from 'react'
import { Meta } from '@storybook/react'
import { Loader } from './Loader'

export default {
  title: 'Components/Ui/Loader',
  component: Loader,
} as Meta

export const Loading: VFC = () => <Loader loading={true}>Invisible</Loader>

export const FinishedLoading: VFC = () => (
  <Loader loading={false}>Visible</Loader>
)
