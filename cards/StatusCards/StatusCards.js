import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

const StatusCards = () => {
  const Letters = ({ num = 3070 }) => {
    return (
      <Grid xs={12} md={4} item>
        <Paper
          variant="outlined"
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 1,
          }}
        >
          <Box textAlign={'center'}>
            <Typography variant="h4">{num}</Typography>
            <Typography variant="h6">אותיות נתרמו</Typography>
          </Box>
        </Paper>
      </Grid>
    )
  }
  const Contributors = ({ num = 266 }) => {
    return (
      <Grid xs={12} md={4} item>
        <Paper
          variant="outlined"
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 1,
          }}
        >
          <Box
            sx={{
              textAlign: 'center',
            }}
          >
            <Typography variant="h4">{num}</Typography>
            <Typography variant="h6">תומכים</Typography>
          </Box>
        </Paper>
      </Grid>
    )
  }
  const ProgressTotal = ({ num = 5.6 }) => {
    return (
      <Grid xs={12} md={4} item>
        <Paper variant="outlined" sx={{ textAlign: 'center' }}>
          <Box position={'relative'}>
            <CircularProgress
              sx={{
                borderRadius: '100%',
                boxShadow: `
                  inset 4px 4px 1px rgba(0,0,0,0.15), 
                  -4px 4px 1px rgba(0,0,0,0.15)
                  `,
              }}
              variant="determinate"
              value={num}
              size={100}
            />
            <Typography
              sx={(theme) => ({
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: theme.palette.primary.main,
              })}
              variant="h5"
            >{`${num}%`}</Typography>
          </Box>
          <Typography variant="body2">
            גוייסו 84,032 ₪ מתוך 1,500,000 ₪
          </Typography>
        </Paper>
      </Grid>
    )
  }
  return (
    <Grid spacing={4} px={'2em'} container sx={{ py: '2em' }}>
      <Letters />
      <Contributors />
      <ProgressTotal />
    </Grid>
  )
}

export default StatusCards
