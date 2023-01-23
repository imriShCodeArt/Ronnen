import { useEffect, useState } from 'react'
import Context from './Context'

const Screen = ({ children }) => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    window && setWidth(window.innerWidth)
    window.addEventListener('resize', (e) => {
      return setWidth(e.target.innerWidth)
    })
  }, [])
  return (
    <Context.Provider value={{ width: width }}>{children}</Context.Provider>
  )
}

export default Screen
