import Menu from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'
import { useDrawerContext } from 'shell/providers/Drawer'
const MenuButton = () => {
  const drawer = useDrawerContext()
  const { openDrawer } = drawer || {}
  return (
    <IconButton color="info" onClick={openDrawer}>
      <Menu />
    </IconButton>
  )
}

export default MenuButton
