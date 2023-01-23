import Link from '@mui/material/Link'
import { useTheme } from '@mui/system'
import Image from 'next/image'
import { useScreenContext } from 'shell/providers/Screen'
import { useScrollContext } from 'shell/providers/Scroll'

const Logo = () => {
  const screenSize = useScreenContext()
  const scroll = useScrollContext()
  const theme = useTheme()

  const { width } = screenSize || {}
  const { breakpoints } = theme || {}
  const { scrolled } = scroll || {}

  const heightObj = () => {
    if (width < breakpoints.values.md) {
      return !scrolled ? '81px' : '51px'
    }
    return !scrolled ? '41px' : '28px'
  }
  return (
    <Link href={'/'}>
      <Image
        src={'/logo.svg'}
        alt={'logo'}
        height={heightObj()}
        width={'250px'}
      />
    </Link>
  )
}

export default Logo
