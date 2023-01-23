import { useContext } from 'react'
import Context from './Context'

export { default } from './Scroll'

export function useScrollContext() {
  return useContext(Context)
}
