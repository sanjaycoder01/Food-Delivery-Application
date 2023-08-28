// import { useState, useEffect } from 'react'
// export const useOnline = () => {
//   const [isOnline, setOnline] = useState(true)
//   useEffect(() => {
//     const handleonline = () => {
//       setOnline(true)
//     }
//     window.addEventListener('online', handleonline)
//     const handleoffline = () => {
//       setOnline(false)
//     }

//     window.addEventListener('offline', handleoffline)
//     return () => {
//       window.removeEventListener('online', handleonline)
//       window.removeEventListener('offline', handleoffline)
//     }
//   }, [])
//   return isOnline
// }

import { useState, useEffect } from 'react'
export const useOnline = () => {
  const [online, setOnline] = useState(true)
  useEffect(() => {
    const handleonline = () => {
      setOnline(true)
    }
    const handleoffline = () => {
      setOnline(false)
    }
    window.addEventListener('online', handleonline)
    window.addEventListener('offline', handleoffline)
  })
  return online
}
