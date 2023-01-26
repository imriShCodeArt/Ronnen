import { useState } from 'react'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'
import Image from 'next/image'

const Summary = () => {
  const [step, setStep] = useState(0)
  const Stage = ({ title, body, price, index }) => (
    <TabPanel index={index} value={step}>
      <Paper
        variant="outlined"
        elevation={0}
        sx={{ height: '290px', py: '2em' }}
      >
        <div style={{ marginBottom: '4em' }}>
          <Typography variant="h4">{title}</Typography>
          <Typography>{body}</Typography>
        </div>
        {price && (
          <Typography variant="h6">לשלב זה נדרשים כ-{price}</Typography>
        )}
      </Paper>
    </TabPanel>
  )

  return (
    <>
      <Tabs onChange={(e, v) => setStep(v)} value={step}>
        {steps.map((step, index) => (
          <Tab key={index} label={step.title} value={index} />
        ))}
      </Tabs>
      <Grid container>
        <Grid xs={8} item>
          {steps.map((s, index) => (
            <Stage {...s} index={index} key={index} />
          ))}
        </Grid>
        <Grid p={'1em'} item xs={4}>
          <Image
            src={'/demo-img.png'}
            alt={'illustration'}
            width={'500px'}
            height={'410px'}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default Summary

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: '1em' }}>{children}</Box>}
    </div>
  )
}

const steps = [
  {
    title: `שלב א'`,
    body: `
    תכנון כולל - אדריכלות, קונסטרוקציה, אינסטלציה, חשמל ויועצים אחרים של בית
    הכנסת. - הקמת יסודות הפרוייקט - התחברות לתשתיות עירוניות.
  `,
    price: `1.5 מיליון ש"ח`,
  },
  {
    title: `שלב ב':`,
    body: `בניית שלד בית הכנסת`,
    price: `3.75 מיליון ש"ח`,
  },
  {
    title: `שלב ג':`,
    body: `עבודות גמר - חיפוי באבן, ריצוף, עבודות טייח, אינסטלציה, חשמל ותאורה, מיזוג אויר, עבודות אלומיניום ונגרות ...`,
    price: `2 מיליון ש"ח`,
  },
  {
    title: `שלב ד':`,
    body: `עבודות פיתוח סביבתי`,
    price: `2 מיליון ש"ח`,
  },
  {
    title: `שלב ה':`,
    body: `ריהוט בית הכנסת`,
    price: `300,000 ש"ח`,
  },
  {
    title: `שלב ו':`,
    body: `חנוכת בית הכנסת בע"ה`,
  },
]
