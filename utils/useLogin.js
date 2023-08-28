// import { useEffect, useState } from 'react'
// export const useLogin = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false)
//   useEffect(() => {
//     isLoggedIn ? (
//       <button onClick={() => setIsLoggedIn(false)}>Logout</button>
//     ) : (
//       <button onClick={() => setIsLoggedIn(true)}>Login</button>
//     )
//   }, [])

//   return isLoggedIn
// }

import { useState } from 'react'

export const useLogin = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogin = () => {
    // Perform login logic here (e.g., API call, authentication check)
    // Update the loggedIn state based on the authentication result
    const isAuthenticated = loggedInUser() // Replace with your authentication logic
    setLoggedIn(isAuthenticated)
    if (isAuthenticated) {
      alert('Login successful')
    }
  }

  const handleLogout = () => {
    // Perform logout logic here
    // Update the loggedIn state to false
    setLoggedIn(false)
    alert('Logout successful')
  }

  return [loggedIn, handleLogin, handleLogout]
}
