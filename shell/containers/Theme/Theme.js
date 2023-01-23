import CssBaseline from '@mui/material/CssBaseline'
import ThemeProvider from '@mui/system/ThemeProvider'
import myTheme from 'config/myTheme'
import DialogProvider from 'shell/providers/Dialog'
import DrawerProvider from 'shell/providers/Drawer'
import DropMenuProvider from 'shell/providers/DropMenu'
import ScreenProvider from 'shell/providers/Screen'
import ScrollProvider from 'shell/providers/Scroll'
import UserProvider from 'shell/providers/User'
import Context from './Context'
const Theme = ({ children, config }) => {
  const { navigation, header, drawer, user } = config || {}

  return (
    <ThemeProvider theme={myTheme()}>
      <CssBaseline />
      <Context.Provider value={{ navigation, header, drawer }}>
        <UserProvider user={user}>
          <DrawerProvider>
            <ScrollProvider>
              <DropMenuProvider>
                <ScreenProvider>
                  <DialogProvider>{children}</DialogProvider>
                </ScreenProvider>
              </DropMenuProvider>
            </ScrollProvider>
          </DrawerProvider>
        </UserProvider>
      </Context.Provider>
    </ThemeProvider>
  )
}
export default Theme
