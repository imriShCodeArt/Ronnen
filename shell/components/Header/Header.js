import { useThemeContext } from 'shell/containers/Theme'
import PromoBar from 'shell/misc/Header/PromoBar'
import TopAppBar from 'shell/misc/Header/TopAppBar'

const Header = (props) => {
  const theme = useThemeContext()
  const { navigation, header } = theme || {}
  const { items, type } = navigation || {}
  const { sticky } = header || {}

  return (
    <>
      <PromoBar />
      <TopAppBar {...{ navigation, header }} />
    </>
  )
}

export default Header
