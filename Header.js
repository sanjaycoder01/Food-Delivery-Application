import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useLogin } from './utils/useLogin'
import UserContext from './utils/UserContext'

import { useSelector } from 'react-redux'
import { useOnline } from './utils/useOnline'
const loggedInUser = () => {
  // API call to check authentication
  return false
}
// const Title = () => (
//   <a href="/">
//     <img
//       className="logo"
//       alt="logo"
//       src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
//     />
//   </a>
// )
// const Header = () => {
//   const { user } = useContext(UserContext)
//   const [loggedIn, setIsLoggedIn] = useState(false)
//   const cartItems = useSelector((store) => store.cart.items)
//   console.log(cartItems)
//   return (
//     <div className="flex justify-between bg-purple-200 shadow-lg ">
//       <h1>{Title}</h1>
//       <button
//         className="btn1"
//         onClick={() => {
//           setTitle('Swiggy')
//         }}
//       >
//         Change Title
//       </button>
//       <div className="nav-items">
//         <ul className="flex py-10 ">
//           <li className="px-2 ">
//             <Link to="/">Home</Link>
//           </li>
//           <Link to="/about">
//             <li className="px-2">About</li>
//           </Link>
//           <Link to="/contact">
//             <li className="px-2">Contact</li>
//           </Link>
//           <Link to="/instamart">
//             <li className="px-2">Instamart</li>
//           </Link>
//           <Link to="/cart">
//             <li className="px-2" data-testid="cart">
//               Cart- {cartItems.length} items
//             </li>
//           </Link>
//         </ul>
//       </div>
//       <h1 className=" p-4 m-4 text-red-400 ">{user.name}</h1>
//       {loggedInUser ? (
//         <button onClick={() => setIsLoggedIn(false)}>Logout</button>
//       ) : (
//         <button onClick={() => setIsLoggedIn(true)}>Login</button>
//       )}
//     </div>
//   )
// }
// export default Header
// import { useState, useContext } from 'react'
// import { Link } from 'react-router-dom'
// import { useLogin } from './utils/useLogin'
// import Login from './Login'
// import UserContext from './utils/UserContext'

const Header = () => {
  const { user } = useContext(UserContext)
  const [loggedIn, setIsLoggedIn] = useState(false)
  const cartItems = useSelector((store) => store.cart.items)
  console.log(cartItems)
  const isOnline = useOnline()
  return (
    <div className="flex justify-between bg-purple-200 shadow-lg">
      <a href="/">
        <div className="h-14 w-14">
          <img
            alt="logo"
            data-testid="logo"
            src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
          />
        </div>
      </a>
      <div className="nav-items">
        <ul className="flex py-10 space-x-4">
          {' '}
          {/* Use space-x-4 to add spacing between list items */}
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <Link to="/about">
            <li className="px-2">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-2">Contact</li>
          </Link>
          <Link to="/instamart">
            <li className="px-2">Instamart</li>
          </Link>
          <Link to="/cart" data-testid="cart">
            <li className="px-2" data-testid="cart1">
              Cart- {cartItems.length} items
            </li>
          </Link>
        </ul>
        <h1
          data-testid="online-status"
          className={`text-2xl ${isOnline ? 'text-green-500' : 'text-red-500'}`}
        >
          {isOnline ? '✅' : '🔴'}
        </h1>
      </div>
      <h1 className="p-4 m-4 text-red-400">{user.name}</h1>
      {loggedInUser ? (
        <button
          onClick={() => setIsLoggedIn(false)}
          className="px-1 py-1 text-white bg-red-100 rounded-lg shadow hover:bg-red-100 "
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => setIsLoggedIn(true)}
          className="px-4 py-2 text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Login
        </button>
      )}
    </div>
  )
}
export default Header
