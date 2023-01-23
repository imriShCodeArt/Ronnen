import Close from '@mui/icons-material/CloseOutlined'
import Root from '@mui/material/Drawer'
import Fab from '@mui/material/Fab'
import { useTheme } from '@mui/system'
import { useState } from 'react'
import Context from './Context'

const Drawer = ({ children }) => {
  const theme = useTheme()
  const { direction } = theme || {}
  const anchor = direction !== 'ltr' ? 'left' : 'right'
  const [content, setContent] = useState()
  const [open, setOpen] = useState(false)
  const [width, setWidth] = useState({ xs: '100%', md: '250px' })
  function openDrawer() {
    setOpen(true)
  }
  function closeDrawer() {
    setOpen(false)
  }

  return (
    <Context.Provider
      value={{ openDrawer, closeDrawer, setContent, getWidth: width, setWidth }}
    >
      {children}
      <Root
        onClose={closeDrawer}
        open={open}
        anchor={anchor}
        PaperProps={{ sx: { width: width } }}
      >
        <Fab
          color="info"
          sx={{
            display: { xs: 'block', md: 'none' },
            // position: 'absolute',
            top: '.75em',
            left: '.75em',
          }}
          size={'small'}
          onClick={closeDrawer}
        >
          <Close />
        </Fab>
        {content}
      </Root>
    </Context.Provider>
  )
}

export default Drawer
