import { useState } from 'react'
import Context from './Context'
const User = ({ children, options }) => {
  const [userData, setUserData] = useState({
    firstName: 'imri',
    lastName: 'wainberg',
    userName: 'ImriSh',
    email: 'imriwain@gmail.com',
    password: 'abc123',
  })

  return (
    <Context.Provider value={{ ...userData, options }}>
      {children}
    </Context.Provider>
  )
}

export default User
