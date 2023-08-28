import { createContext } from 'react'
const UserContext = createContext({
  user: {
    name: 'sanjay',
    email: 'abc@gamil.com',
  },
})

export default UserContext
