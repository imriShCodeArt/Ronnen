import { useContext } from 'react'
import Context from './Context'

export { default } from './DropMenu'

export function useDropMenuContext() {
  return useContext(Context)
}
