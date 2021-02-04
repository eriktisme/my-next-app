import { FC, useState } from 'react'
import { Sidebar } from '../context/sidebar'
import { SidebarInterface } from '../types'

export const SidebarProvider: FC = ({ children }) => {
  const [open, setOpen] = useState(false)

  const sidebar: SidebarInterface = {
    open,
    toggle(state: boolean): void {
      setOpen(state)
    },
  }

  return <Sidebar.Provider value={sidebar}>{children}</Sidebar.Provider>
}
