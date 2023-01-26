// import { useRouter } from 'next/router'

import PrimaryLayout from '../shell/containers/PrimaryLayout/PrimaryLayout'
import { NextPageWithLayout } from './page'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import Divider from '@mui/material/Divider'
import HeadingSection from 'cards/HeadingSection'

const Home: NextPageWithLayout = () => {
  // const { locale } = useRouter()

  return (
    <>
      <HeadingSection low={true} />
      <Container>
        <Typography variant="h1">אודות</Typography>
        <Divider
          sx={{
            borderBottomWidth: '1em',
            width: '110vw',
            position: 'relative',
            left: '-12%',
          }}
        />
        <Typography my={'1em'}>
          עם כניסת הגולש לאתר מופיע עמוד ברירת המחדל עם מילים ואותיות בספר התורה
          הניתנות לתרומה. עם זאת האותיות שכבר נרכשו יופיעו עם סימון מיוחד המעיד
          על כך שכבר נרכשו, בכך כל רוכש יכול להבטיח את זכותו הבלעדית על האות או
          הקטע אותו רכש שיישא את שמו ושמות יקיריו לנצח.
        </Typography>
        <Typography my={'1em'}>
          {`
          עם ההחלטה לרכוש מקטע כל שהוא בספר התורה מופנה הגולש לעמוד תרומה
          מאובטחת עפ"י כל התקנים המחמירים, כאשר בתום תהליך התרומה יישלחו באופן
          אוטומטי קבלה וכן תעודת הוקרה מעוצבת ומפוארת עם האותיות או המילים
          שנרכשו.`}
        </Typography>
        <Typography my={'1em'}>
          האות, המילה, או המקטע אשר נרכשו יופיעו על שם הרוכש או התורם יחד עם
          השמות שהנציח. בכל לחיצה על אותו הקטע באתר יופיע מידע זה אך עם זאת ניתן
          לציין בעת התרומה שהמידע יופיע בעילום שם. בכל רגע נתון ניתן להוריד
          מהאתר את תעודת ההוקרה על החלק בספר התורה.
        </Typography>
      </Container>
    </>
  )
}

export default Home

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>
}
