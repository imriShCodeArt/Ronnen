import PlayArrow from '@mui/icons-material/PlayArrow'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'

const BottomNavBar = () => {
  return (
    <BottomNavigation>
      <BottomNavigationAction>
        <PlayArrow />
      </BottomNavigationAction>
    </BottomNavigation>
  )
}

export default BottomNavBar
