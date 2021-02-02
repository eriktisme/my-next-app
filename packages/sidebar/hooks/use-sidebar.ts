import { SidebarInterface } from '../types'
import { useContext } from 'react'
import { Sidebar } from '../context/sidebar'

export const useSidebar = (): SidebarInterface => useContext(Sidebar)
