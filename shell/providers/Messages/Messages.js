import React from 'react'
import Context from './Context'
const Messages = ({ children }) => {
  return <Context.Provider value={{}}>{children}</Context.Provider>
}

export default Messages
