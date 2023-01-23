import { useRouter } from 'next/router'

import PrimaryLayout from '../shell/containers/PrimaryLayout/PrimaryLayout'
import { NextPageWithLayout } from './page'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Home: NextPageWithLayout = () => {
  const { locale } = useRouter()

  return (
    <Box textAlign={'center'} pt={'4em'}>
      <Typography variant="h1">404</Typography>
      <Typography variant="h2">הדף לא נמצא...</Typography>
    </Box>
  )
}

export default Home

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>
}
