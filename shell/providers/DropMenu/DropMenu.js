import Root from '@mui/material/Menu'
import { useState } from 'react'
import Context from './Context'

const DropMenu = ({ children }) => {
  const [content, setContent] = useState()
  const [anchorEl, setAnchorEl] = useState(null)
  const [open, setOpen] = useState(false)
  const [width, setWidth] = useState(250)
  function openMenu() {
    setOpen(true)
  }
  function closeMenu() {
    setOpen(false)
  }
  return (
    <Context.Provider
      value={{
        openMenu,
        closeMenu,
        setContent,
        getWidth: width,
        getOpen: open,
        setWidth: (num) => setWidth(num),
        setAnchorEl: (e) => setAnchorEl(e.currentTarget),
      }}
    >
      {children}
      <Root
        onClose={closeMenu}
        open={open}
        anchorEl={anchorEl}
        PaperProps={{
          sx: {
            width: typeof width === 'number' ? `${width}px` : `${width}`,
          },
        }}
      >
        {content}
      </Root>
    </Context.Provider>
  )
}

export default DropMenu
