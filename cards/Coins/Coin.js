import Chip from '@mui/material/Chip'

const Coin = ({ text, onClick, amount, ...rest }) => {
  const _suffix = 'ש"ח'
  const num = 26

  return <Chip color="info" onClick={onClick} label={text} {...rest} />
}

export default Coin
