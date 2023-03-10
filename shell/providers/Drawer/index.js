import { useContext } from 'react'
import Context from './Context'

export { default } from './Drawer'

export function useDrawerContext() {
  return useContext(Context)
}
