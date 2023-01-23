import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'

const Coins = () => {
  const _suffix = 'ש"ח'
  const num = 26
  const items = [
    'אות אחת',
    '10 אותיות',
    '50 אותיות',
    '100 אותיות',
    '500 אותיות',
    '1000 אותיות',
  ]

  const RenderItems = () => {
    return items.map((item, index) => (
      <Chip
        color="info"
        onClick={() => console.log(item)}
        key={index}
        label={item}
      />
    ))
  }

  return (
    <Stack
      spacing={1}
      direction={'row'}
      sx={{ overflowX: 'auto' }}
      display={'flex'}
    >
      <RenderItems />
    </Stack>
  )
}

export default Coins
