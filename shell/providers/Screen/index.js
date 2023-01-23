import { useContext } from 'react'
import Context from './Context'

export { default } from './Screen'

export function useScreenContext() {
  return useContext(Context)
}
