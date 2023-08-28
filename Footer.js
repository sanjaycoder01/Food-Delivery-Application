import { useContext } from 'react'
import UserContext from './utils/UserContext'
const Footer = () => {
  const { user } = useContext(UserContext)
  return (
    <div>
      <h1 className="flex  items-end justify-end  p-4">
        {user.name}
        {user.email}
      </h1>
      <h3 className="foot flex items-end justify-end  p-4 ">
        copywright <span>&copy;</span>
      </h3>
    </div>
  )
}
export default Footer
