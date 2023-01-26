// import { useRouter } from 'next/router'

import { NextPageWithLayout } from './page'

import ContactForm from 'cards/ContactForm'
import Summary from 'cards/Summary'
import Video from 'cards/Video'

import Box from '@mui/material/Container'
import Divider from '@mui/material/Divider'

import HeadingSection from 'cards/HeadingSection'
import StatusCards from 'cards/StatusCards'

import PrimaryLayout from '../shell/containers/PrimaryLayout/PrimaryLayout'

const Home: NextPageWithLayout = () => {
  // const { locale } = useRouter()

  return (
    <>
      <HeadingSection low={false} />
      <Box>
        <StatusCards />
        <Divider
          sx={{
            borderBottomWidth: '1em',
            width: '110vw',
            position: 'relative',
            left: '-12%',
          }}
        />
        <Summary />
        <Video />
        <ContactForm />
      </Box>
    </>
  )
}

export default Home

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>
}
