import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import MenuItem from '@mui/material/MenuItem'
import { useRouter } from 'next/router'
import { useThemeContext } from 'shell/containers/Theme'
const VerticalNavList = ({ items }) => {
  const theme = useThemeContext()
  const { registerHeaderElement } = theme || {}
  const router = useRouter()
  const RenderItems = () => {
    return items.map(({ id, title, slug, items }) => (
      <MenuItem key={id} onClick={() => router.push(`/${slug}`)}>
        <ListItemText>{title}</ListItemText>
      </MenuItem>
    ))
  }
  return (
    <div>
      <List>
        <RenderItems />
      </List>
    </div>
  )
}

export default VerticalNavList
