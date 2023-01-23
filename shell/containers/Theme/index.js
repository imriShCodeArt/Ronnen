import { useContext } from 'react'
import Context from './Context'

export { default } from './Theme'

export function useThemeContext() {
  return useContext(Context)
}
