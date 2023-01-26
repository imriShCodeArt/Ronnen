import Typography from '@mui/material/Typography'
import PrimaryLayout from 'shell/containers/PrimaryLayout/PrimaryLayout'
import { NextPageWithLayout } from './page'

const Account: NextPageWithLayout = () => {
  return (
    <>
      <Typography variant="h1">חשבון</Typography>
      <Typography variant="h3">ברוך הבא שם משתמש</Typography>
    </>
  )
}

export default Account

Account.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>
}
