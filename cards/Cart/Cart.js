import { useEffect, useState } from 'react'

import { Checkbox } from '@mui/material'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useUserContext } from 'shell/providers/User'

const Cart = ({ price, label, amount }) => {
  const [count, setCount] = useState(amount || 0)
  const [anonymous, setAnonymous] = useState(false)
  const user = useUserContext()
  const { firstName, lastName } = user || {}
  const [userName, setUserName] = useState(
    anonymous ? 'אנונימי' : `${firstName} ${lastName}`
  )

  useEffect(() => {
    setUserName(anonymous ? 'אנונימי' : `${firstName} ${lastName}`)
  }, [anonymous])

  return (
    <Grid container>
      {/* <Grid xs={12} item></Grid> */}
      <Grid xs={6} item>
        <Typography variant="body">ה' יברך אתכם!</Typography>
        <Typography variant="h4">לאישור ושליחת ההזמנה</Typography>
        <span
          style={{
            display: 'flex',
            alignItems: 'baseline',
            marginTop: '1em',
            marginBottom: '2em',
          }}
        >
          <TextField
            onChange={(e) => setCount(e.target.value)}
            type={'number'}
            InputLabelProps={{ sx: { textAlign: 'center' } }}
            value={count}
            variant={'standard'}
            sx={{ width: '3em' }}
          />
          <Typography ml={'.5em'} variant="h6">
            אותיות
          </Typography>
        </span>
        {count && (
          <Typography variant="overline">{`${count * 26} ש"ח`}</Typography>
        )}
      </Grid>
      <Grid
        sx={(theme) => ({ bgcolor: theme.palette.primary.main })}
        item
        xs={6}
      >
        <Typography color={'#FFF'} variant="h3">
          פרטים לתעודה
        </Typography>
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            fullWidth
            InputLabelProps={{ sx: { color: '#FFF' } }}
            variant={'filled'}
            placeholder={'מי הרוכש של האות'}
            label={'בעלי האות'}
            InputProps={{ sx: { color: '#FFF' } }}
          />
          <Checkbox
            onChange={() => setAnonymous(!anonymous)}
            checked={anonymous}
            color={'secondary'}
          />
          <Typography sx={{ color: '#FFF' }}>תרומה אנונימית</Typography>
        </span>
        <TextField
          fullWidth
          InputLabelProps={{ sx: { color: '#FFF' } }}
          variant={'filled'}
          placeholder={'עבור מי תרצו להקדיש את התרומה'}
          label={'לזכותם של'}
          InputProps={{ sx: { color: '#FFF' } }}
        />
      </Grid>
      <Button
        disabled={userName.split('').length < 2}
        onClick={() => console.log('Buy now')}
        sx={{ borderRadius: '0' }}
        variant="contained"
        fullWidth
      >
        בצע הזמנה
      </Button>
    </Grid>
  )
}

export default Cart
