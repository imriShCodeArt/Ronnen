import Box from '@mui/material/Box'
import AvatarDropMenu from 'shell/misc/Header/AvatarDropMenu'

const AvatarContainer = () => {
  return (
    <Box
      display={'flex'}
      justifyContent={'end'}
      flexGrow={1}
      minWidth={'150px'}
    >
      <AvatarDropMenu />
    </Box>
  )
}

export default AvatarContainer
