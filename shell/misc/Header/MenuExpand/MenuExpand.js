import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import { useEffect, useState } from 'react'
import { useHeaderContext } from 'shell/misc/Header/TopAppBar'

const MenuExpand = ({ open, content }) => {
  const header = useHeaderContext()
  const { closeMenu } = header || {}
  const mode = (color) => ({
    position: 'fixed',
    top: '41px',
    left: 0,
    right: 0,
    zIndex: 9,
    bgcolor: color,
  })

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY === 0 ? setScrolled(false) : setScrolled(true)
    })
  }, [])
  return (
    <Collapse
      onMouseLeave={closeMenu}
      sx={(theme) => scrolled && mode(theme.palette.primary.main)}
      in={open}
    >
      <Box>{content}</Box>
    </Collapse>
  )
}

export default MenuExpand
