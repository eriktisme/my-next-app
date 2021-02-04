import { createContext } from 'react'
import { SidebarInterface } from '../types'

export const Sidebar = createContext<SidebarInterface>({
  open: false,
  toggle: (state: boolean) => {},
})
