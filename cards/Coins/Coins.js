import Stack from '@mui/material/Stack'
import Cart from 'cards/Cart'
import { useDialogContext } from 'shell/providers/Dialog'
import Coin from './Coin'
import items from './items'

const Coins = () => {
  const dialog = useDialogContext()
  const { setContent, openDialog, setWidth: setDialogWidth } = dialog || {}

  function handleClick({ label, value, amount }) {
    setContent(<Cart price={value} label={label} amount={amount} />)
    setDialogWidth('80vw')
    openDialog()
  }

  return (
    <Stack
      spacing={1}
      direction={'row'}
      sx={{ overflowX: 'auto' }}
      display={'flex'}
    >
      {items.map(({ label, value, amount }, index) => (
        <Coin
          amount={amount}
          onClick={() => handleClick({ label, value, amount })}
          text={label}
          key={index}
        />
      ))}
    </Stack>
  )
}

export default Coins
