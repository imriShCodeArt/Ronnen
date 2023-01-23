import Box from '@mui/material/Box'
import { useScrollContext } from 'shell/providers/Scroll'
const CenterContainer = ({ children }) => {
  const scroll = useScrollContext()
  // console.log(scroll)
  const { scrolled } = scroll || {}
  return (
    <Box px={'4em'} flexGrow={1}>
      {children}
    </Box>
  )
}

export default CenterContainer
