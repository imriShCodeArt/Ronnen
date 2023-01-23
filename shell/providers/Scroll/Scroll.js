import { useEffect, useState } from 'react'
import Context from './Context'

const Scroll = ({ children }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      return setScrolled(window.scrollY !== 0)
    })
  }, [])
  return (
    <Context.Provider value={{ scrolled: scrolled }}>
      {children}
    </Context.Provider>
  )
}

export default Scroll
