import { useContext } from 'react'
import Context from './Context'

export { default } from './Backdrop'

export function useBackdropContext() {
  return useContext(Context)
}
