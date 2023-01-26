import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

const Summary = () => {
  const Stage = ({ title, body, price }) => (
    <Grid flexGrow={1} textAlign={'center'} xs={12} md={6} item>
      <Paper variant="outlined" elevation={0} sx={{ height: '100%' }}>
        <Typography variant="h4">{title}</Typography>
        <Typography>{body}</Typography>
        {price && (
          <Typography variant="h6">לשלב זה נדרשים כ-{price}</Typography>
        )}
      </Paper>
    </Grid>
  )

  return (
    <Grid py={'2.5em'} justifyContent={'center'} spacing={'1em'} container>
      {steps.map((s, index) => (
        <Stage {...s} key={index} />
      ))}
    </Grid>
  )
}

export default Summary

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
