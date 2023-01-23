import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useRouter } from 'next/router'
import VerticalNavList from 'shell/misc//Header/VerticalNavList'
import { useHeaderContext } from 'shell/misc/Header/TopAppBar'

const NavBar = ({ navigation }) => {
  const header = useHeaderContext()
  const { openMenu, setContent, closeMenu } = header || {}
  const router = useRouter()

  function handleHover(content) {
    content && setContent(content)
    content ? openMenu() : closeMenu(null)
  }

  const { items, color, activeColor } = navigation || {}

  return (
    <Box
      component={'nav'}
      justifyContent={'space-around'}
      display="flex"
      flexGrow={1}
    >
      {items.map(({ title, slug, id, items: _items }) => (
        <Button
          key={id}
          variant="text"
          disableRipple
          onMouseEnter={() =>
            handleHover(_items && <VerticalNavList items={_items} />)
          }
          onClick={() => router.push(`/${slug}`)}
          sx={(theme) => ({
            color:
              router.route === `/${slug}`
                ? theme.palette[`${activeColor}`].main
                : theme.palette[`${color}`].main,
          })}
        >
          {title}
        </Button>
      ))}
    </Box>
  )
}

export default NavBar
