import { useContext } from 'react'
import Context from './Context'

export { default } from './TopAppBar'

export function useHeaderContext() {
  return useContext(Context)
}
