import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

const ContactForm = () => {
  return (
    <Grid container py={'1em'}>
      <Grid
        sx={{
          pr: { xs: undefined, md: '1em' },
        }}
        rowGap={1.75}
        flexDirection={'column'}
        display={'flex'}
        item
        xs={12}
        md={8}
      >
        <Typography variant="h4">צרו איתנו קשר</Typography>
        <TextField label={'שם מלא'} />
        <TextField label={'טלפון נייד'} />
        <TextField label={'אימייל'} />
        <TextField minRows={4} label={'הערות'} />
        <Button variant="contained">שליחה</Button>
      </Grid>
      <Grid
        py={'2em'}
        px={'1em'}
        display={'flex'}
        flexWrap={'wrap'}
        flexDirection={'column'}
        sx={(theme) => ({ bgcolor: theme.palette.secondary.light })}
        md={4}
        xs={12}
        item
      >
        <div>
          <div
            style={{
              width: '60%',
              flexGrow: 1,
            }}
          >
            <Typography color={'primary'} variant="h5">
              אפשר לשוחח בטלפון
            </Typography>
            <Divider sx={{ borderBottomWidth: '.25em', borderRadius: '1em' }} />
          </div>
          <Typography variant="h6">0525558182</Typography>
        </div>
        <div>
          <div
            style={{
              width: '75%',
              flexGrow: 1,
            }}
          >
            <Typography color={'primary'} variant="h5">
              או לשלוח הודעה בוואטסאפ
            </Typography>
            <Divider sx={{ borderBottomWidth: '.25em', borderRadius: '1em' }} />
          </div>
          <Typography variant="h6" dir={'ltr'} textAlign={'left'}>
            +972525558182
          </Typography>
        </div>
      </Grid>
    </Grid>
  )
}

export default ContactForm
