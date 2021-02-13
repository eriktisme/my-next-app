import { createContext } from 'react'
import { LogInterface } from '../types'
import { noop } from '@packages/utils'

export const Log = createContext<LogInterface>({
  log: noop,
})
