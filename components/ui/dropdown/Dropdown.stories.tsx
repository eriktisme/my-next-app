import { VFC } from 'react'
import { Dropdown } from './Dropdown'
import { Meta } from '@storybook/react'
import { cn } from "@packages/utils";

export default {
  title: 'Components/Ui/Dropdown',
  component: Dropdown,
} as Meta

export const Default: VFC = () => (<div className={'relative'}>
  <Dropdown button={
    <button type={"button"}>Dropdown</button>
  } position={cn('origin-top-left', 'left-0')} />
</div>)
