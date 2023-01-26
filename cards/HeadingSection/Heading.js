import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'

const Heading = ({ low }) => {
  return (
    <Card elevation={0}>
      <CardMedia
        height={!low ? '100%' : '200px'}
        component="img"
        image="/halom_cover.png"
        alt={'img'}
      />
    </Card>
  )
}

export default Heading
