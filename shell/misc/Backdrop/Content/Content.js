import Card from '@mui/material/Card'

const Content = ({ children }) => {
  return (
    <Card
      elevation={1}
      sx={{
        position: 'relative',
        borderTopLeftRadius: '2em ',
        borderTopRightRadius: '2em ',
        bottom: 0,
        top: '0',
        right: 0,
        left: 0,
        transition: 'all .2s ease-in-out',
        // height: '100%',
        bgcolor: '#FFF',
      }}
    >
      {children}
    </Card>
  )
}

export default Content
