import PrimaryLayout from 'shell/containers/PrimaryLayout/PrimaryLayout'
import { NextPageWithLayout } from './page'

const Account: NextPageWithLayout = () => {
  return <></>
}

export default Account

Account.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>
}
