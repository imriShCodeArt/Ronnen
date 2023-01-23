import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import TextField from '@mui/material/TextField'
import Image from 'next/image'
import { useState } from 'react'

const SignIn = () => {
  const [tabsState, setTabsState] = useState(0)
  return (
    <Card sx={{ צןמHeight: { xs: 'auto', md: '60vh' } }}>
      <Tabs
        color="inherit"
        value={tabsState}
        onChange={(e, v) => setTabsState(v)}
      >
        <Tab value={0} label="כניסה" />
        <Tab value={1} label="הרשמה" />
      </Tabs>
      <TabPanel value={tabsState} index={0}>
        <CardHeader title={'כניסה לרשומים'} subheader={'ברוכים השבים'} />
        <CardContent
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          <Box display={'flex'} flexDirection={'column'} flexGrow={1}>
            <TextField label={'מייל'} />
            <TextField label={'ססמא'} />
            <Button sx={{ mt: '2.5em' }} variant="contained">
              כניסה
            </Button>
          </Box>
          <Box flexGrow={1}>
            <Image
              src={'/halom_cover.png'}
              alt={'cover'}
              height={'185px'}
              width={'350%'}
            />
          </Box>
        </CardContent>
      </TabPanel>
      <TabPanel value={tabsState} index={1}>
        <CardHeader
          title={'הרשמת משתמשים חדשים'}
          subheader={'ברוכים הבאים לקהילה!'}
        />
        <CardContent
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          <Box display={'flex'} flexDirection={'column'} flexGrow={1}>
            <TextField label={'מייל'} />
            <TextField label={'שם פרטי'} />
            <TextField label={'שם משפחה'} />
            <TextField label={'ססמא'} />
            <Button sx={{ mt: '2.5em' }} variant="contained">
              הרשמה
            </Button>
          </Box>
        </CardContent>
      </TabPanel>
    </Card>
  )
}

export default SignIn

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}
