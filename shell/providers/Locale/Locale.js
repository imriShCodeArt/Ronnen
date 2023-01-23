import React, { useState } from 'react'
import { IntlProvider } from 'react-intl'
import Context from './Context'
const Locale = ({ children }) => {
  const [messages, setMessages] = useState({})
  return (
    <Context.Provider value={{}}>
      <IntlProvider locale="en" messages={messages}>
        {children}
      </IntlProvider>
    </Context.Provider>
  )
}

export default Locale
