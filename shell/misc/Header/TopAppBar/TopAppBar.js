import { lazy, Suspense, useEffect, useState } from 'react'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { useTheme } from '@mui/system'

import Logo from 'shell/misc/Header/Logo'
import MenuButton from 'shell/misc/Header/MenuButton'
import MenuExpand from 'shell/misc/Header/MenuExpand'
import { useScrollContext } from 'shell/providers/Scroll'

import AvatarContainer from './components/AvatarContainer'
import CenterContainer from './components/CenterContainer'
import RootContainer from './components/RootContainer'

const NavBar = lazy(() => import('shell/misc/Header/NavBar/'))

import { useScreenContext } from 'shell/providers/Screen'
import Context from './Context'

import Coins from 'cards/Coins'

const TopAppBar = ({ navigation, header }) => {
  const theme = useTheme()
  const scroll = useScrollContext().scrolled
  const screenSize = useScreenContext()

  const { width: screenWidth } = screenSize || {}

  const { breakpoints } = theme || {}
  const { sticky, navbar, logo } = header || {}

  const { items } = navigation || {}

  const navBarElm = items && <NavBar navigation={navigation} />

  const inlineNavBar = () => {
    if (items && items.length <= 5)
      return (
        screenWidth >= breakpoints.values.md &&
        navbar === process.env['NAVBAR_INLINE']
      )
  }

  const blockNavBar = () => {
    if (items && items.length > 5) return navbar === process.env['NAVBAR_TOP']
    else if (navbar === process.env['NAVBAR_TOP']) return true
    return false
  }

  const [mode, setMode] = useState({
    elevation: 0,
    variant: 'outlined',
    position: sticky ? 'sticky' : 'static',
  })
  const [toolbarMode, setToolbarMode] = useState({
    variant: 'regular',
  })
  useEffect(() => {
    setMode((m) => ({
      ...m,
      variant: scroll ? 'elevation' : 'outlined',
      elevation: scroll ? undefined : 0,
    }))
    setToolbarMode((m) => ({
      ...m,
      variant:
        window.innerWidth > breakpoints.values.md && scroll
          ? 'dense'
          : 'regular',
    }))
  }, [scroll])

  const [expandableContent, setExpandableContent] = useState()
  const [open, setOpen] = useState(false)
  function setContent(content) {
    setExpandableContent(content)
  }
  function openMenu() {
    setOpen(true)
  }
  function closeMenu() {
    setOpen(false)
  }

  return (
    <Context.Provider value={{ openMenu, closeMenu, setContent }}>
      <AppBar
        component={'header'}
        {...{ ...mode }}
        sx={(theme) => ({
          border: 'none',
          backdropFilter: 'blur(10px)',
          bgcolor: `${theme.palette.primary.main}95`,
        })}
      >
        <Toolbar
          variant={toolbarMode.variant}
          sx={{ transition: 'all .2s ease-in-out' }}
        >
          <RootContainer>
            {screenWidth < breakpoints.values.md ? (
              <MenuButton />
            ) : logo ? (
              <Logo />
            ) : (
              <MenuButton />
            )}
          </RootContainer>
          <CenterContainer>
            <Suspense fallback={<div />}>
              {inlineNavBar() && navBarElm}
            </Suspense>
          </CenterContainer>
          <AvatarContainer />
        </Toolbar>
        <Suspense fallback={<div />}>{blockNavBar() && navBarElm}</Suspense>
        <MenuExpand content={expandableContent} open={open} />
      </AppBar>
      <Coins />
    </Context.Provider>
  )
}

export default TopAppBar
