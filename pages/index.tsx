import { useRouter } from 'next/router'

import PrimaryLayout from '../shell/containers/PrimaryLayout/PrimaryLayout'
import { NextPageWithLayout } from './page'

import Box from '@mui/material/Box'

import Container from '@mui/material/Container'
import HeadingSection from 'cards/HeadingSection'
import StatusCards from 'cards/StatusCards'

const Home: NextPageWithLayout = ({ html }) => {
  const { locale } = useRouter()

  return (
    <Box>
      <HeadingSection />
      <StatusCards />
      <Container>
        <iframe
          width={'100%'}
          height={'550px'}
          src="https://www.youtube.com/embed/lCy1wy5UeW8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </Container>
    </Box>
  )
}

export default Home

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>
}
