import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'

const Heading = () => {
  return (
    <Card elevation={0}>
      <CardMedia
        height="100%"
        component="img"
        image="/halom_cover.png"
        alt={'img'}
      />
    </Card>
  )
}

export default Heading
