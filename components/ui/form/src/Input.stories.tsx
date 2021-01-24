import { VFC } from 'react'
import { Input } from './Input'
import { Meta } from '@storybook/react'

export default {
  title: 'Components/Ui/Input',
  component: Input,
} as Meta

export const Default: VFC = () => <Input value={''} onChange={() => {}} />

export const WithPlaceholder: VFC = () => (
  <Input placeholder={'Placeholder'} value={''} onChange={() => {}} />
)

export const WithLabel: VFC = () => (
  <Input label={'Label'} value={''} onChange={() => {}} />
)

export const Email: VFC = () => (
  <Input type={'email'} value={''} onChange={() => {}} />
)

export const Password: VFC = () => (
  <Input type={'password'} value={''} onChange={() => {}} />
)
