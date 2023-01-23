import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuItem from '@mui/material/MenuItem'

import LogoutIcon from '@mui/icons-material/LogoutOutlined'

import { useRouter } from 'next/router'
import { useUserContext } from 'shell/providers/User'

const UserNavOptions = () => {
  const router = useRouter()
  const navigate = router.push
  const user = useUserContext()
  const { options } = user || {}
  return (
    <>
      {options &&
        options.main.map(({ id, title, slug, icon, options }) => {
          return (
            <MenuItem key={`item_${id}`} onClick={() => navigate(`/${slug}`)}>
              <ListItemText>{title}</ListItemText>
              <ListItemIcon>{icon}</ListItemIcon>
            </MenuItem>
          )
        })}
      {options['footer'] && <Divider variant="inset" />}
      {options['footer'] &&
        options.footer.map(() => {
          return (
            <>
              <MenuItem>
                <ListItemText>Logout</ListItemText>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
              </MenuItem>
            </>
          )
        })}
    </>
  )
}

export default UserNavOptions
