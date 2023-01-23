import Root from '@mui/material/Dialog'
import { useState } from 'react'
import { useThemeContext } from 'shell/containers/Theme'
import Context from './Context'

const Dialog = ({ children }) => {
  const theme = useThemeContext()
  const { drawer } = theme || {}
  const { anchor } = drawer || {}
  const [content, setContent] = useState()
  const [open, setOpen] = useState(false)
  const [width, setWidth] = useState({
    xs: '100%',
    sm: '80%',
    md: '750px',
    xl: '1200px',
  })
  function openDialog() {
    setOpen(true)
  }
  function closeDialog() {
    setOpen(false)
  }
  return (
    <Context.Provider
      value={{ openDialog, closeDialog, setContent, getWidth: width, setWidth }}
    >
      {children}
      <Root
        onClose={closeDialog}
        open={open}
        anchor={anchor}
        PaperProps={{ sx: { minWidth: width } }}
      >
        {content}
      </Root>
    </Context.Provider>
  )
}

export default Dialog
