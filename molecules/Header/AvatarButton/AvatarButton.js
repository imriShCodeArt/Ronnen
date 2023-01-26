import { lazy, Suspense } from 'react'

import SignIn from 'cards/SignIn'

import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/styles'

import { useDialogContext } from 'shell/providers/Dialog'
import { useDropMenuContext } from 'shell/providers/DropMenu'
import { useUserContext } from 'shell/providers/User'

const UserOptions = lazy(() => import('molecules/Header/UserNavOptions'))

const AvatarButton = ({ ...props }) => {
  const dialog = useDialogContext()
  const { openDialog, setContent: setDialogContent } = dialog || {}
  const user = useUserContext()
  const { firstName, lastName, email } = user || {}
  const theme = useTheme()
  const { breakpoints } = theme || {}
  const menu = useDropMenuContext()
  const {
    openMenu,
    setContent: setMenuContent,
    setWidth,
    setAnchorEl,
  } = menu || {}

  const handleAvatarClick = (e) => {
    setAnchorEl(e)
    setMenuContent(
      <Suspense fallback={<div />}>
        <UserOptions />
      </Suspense>
    )
    setWidth(e.screenX < breakpoints.values.xs ? '80vw' : 250)
    openMenu()
  }
  const handleSigninClick = (e) => {
    setDialogContent(<SignIn />)
    openDialog()
  }

  return user ? (
    <Button onClick={(e) => handleAvatarClick(e) && setMenuContent()}>
      <Avatar title={user && `${firstName} ${lastName} \n ${email}`}></Avatar>
    </Button>
  ) : (
    <Button onClick={handleSigninClick} color="info" variant="text">
      כניסה/הרשמה
    </Button>
  )
}

export default AvatarButton
