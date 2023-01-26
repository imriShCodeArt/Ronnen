import Typography from '@mui/material/Typography'
import PrimaryLayout from 'shell/containers/PrimaryLayout/PrimaryLayout'

import { NextPageWithLayout } from './page'

const Settings: NextPageWithLayout = () => {
  return (
    <>
      <Typography variant="h1">הגדרות</Typography>
      <Typography variant="h3">דף הגדרות</Typography>
    </>
  )
}

export default Settings

Settings.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>
}
