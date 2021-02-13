import { createContext } from 'react'
import { SidebarInterface } from '../types'
import { noop } from "@packages/utils";

export const Sidebar = createContext<SidebarInterface>({
  open: false,
  toggle: noop,
})
