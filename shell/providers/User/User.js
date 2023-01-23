import Context from './Context'
const User = ({ children, user }) => {
  return <Context.Provider value={user}>{children}</Context.Provider>
}

export default User
