import Head from 'next/head'

import Backdrop from 'shell/components/Backdrop'

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start'
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
  justify = 'items-center',
  ...divProps
}) => {
  return (
    <Backdrop>
      <Head>
        <title>החלום מתגשם</title>
      </Head>
      {children}
    </Backdrop>
  )
}

export default PrimaryLayout
