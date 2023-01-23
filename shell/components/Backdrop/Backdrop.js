import Box from '@mui/material/Box'
import Header from 'shell/components/Header'
import Content from 'shell/misc/Backdrop/Content'

const Backdrop = ({ children }) => {
  return (
    <Box
      sx={(theme) => ({ bgcolor: theme.palette.primary.main })}
      height={'100vh'}
      width={'100%'}
      position={'absolute'}
    >
      <Header />
      <Content>{children}</Content>
    </Box>
  )
}

export default Backdrop
