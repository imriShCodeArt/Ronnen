import Box from '@mui/material/Box'
import Link from 'next/link'
const PromoBar = () => {
  return (
    <Box bgcolor={'#FFF'} textAlign={'center'}>
      מהרו, <Link href={'/register'}>ההרשמה</Link> בעיצומה!
    </Box>
  )
}

export default PromoBar
