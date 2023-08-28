// import { RestaurantCard } from './RestaurantCard'
// import { useState, useEffect } from 'react'
// import Shimmer from './Shimmer'
// import { Link } from 'react-router-dom'
// import { cdn_url_img } from './config'
// import { filterData } from './utils/helper'
// import { useOnline } from './utils/useOnline'
// // 8 restraunt list = > filtered  rest with "King"

// const Body = () => {
//   const [allRestaurants, setAllRestaurants] = useState([])
//   const [filteredRestaurants, setFilteredRestaurants] = useState([])
//   const [searchText, setSearchText] = useState('')
//   // empty dependency array => once after render
//   // dep arry [searchText] => once after initial render + everytime after redern (my searchText changes)
//   useEffect(() => {
//     // API call
//     getRestaurants()
//   }, [])
//   async function getRestaurants() {
//     const data = await fetch(
//       'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING',
//     )

//     const json = await data.json()
//     console.log(json)
//     // Optional Chaining
//     setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
//     setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
//   }
//   console.log('render')
//   // not render component (Early return)
//   // const online = true
//   // if (!online) return <h1>you are online</h1>

//   const isOnline = useOnline()
//   if (!isOnline)
//     return (
//       <div className="offline-container">
//         <h1>😒Offline, No internet connection</h1>
//         <img
//           src="https://c8.alamy.com/comp/DG67YN/offline-character-laptop-showing-www-communication-status-disconnected-DG67YN.jpg"
//           alt="Offline"
//           className="offline-image"
//         />
//       </div>
//     )
//   if (!allRestaurants) return null
//   if (filteredRestaurants?.length === 0)
//     return <h1>No Restraunt match your Filter!!</h1>
//   return allRestaurants?.length === 0 ? (
//     <Shimmer />
//   ) : (
//     <>
//       <div className="search-container p-6 bg-gray-50 my-5 mx-5">
//         <input
//           type="text"
//           className="search-input"
//           placeholder="Search"
//           value={searchText}
//           onChange={(e) => {
//             setSearchText(e.target.value)
//           }}
//         />
//         <button
//           //style is a js object and it is inline css
//           className="bg-pink-200 p-1 m-2 text-black"
//           onClick={() => {
//             //need to filter the data
//             const data = filterData(searchText, allRestaurants)
//             // update the state - restaurants
//             setFilteredRestaurants(data)
//           }}
//         >
//           Search
//         </button>
//       </div>
//       <div className="list">
//         {filteredRestaurants.map((restaurant) => {
//           return (
//             <Link
//               to={'/restaurant/' + restaurant.data.id}
//               key={restaurant.data.id}
//             >
//               <RestaurantCard {...restaurant.data} />
//             </Link>
//           )
//         })}
//       </div>
//     </>
//   )
// }
// export default Body
// import { RestaurantCard, promotedlabel } from './RestaurantCard'
// import { useState, useEffect, useContext } from 'react'
// import Shimmer from './Shimmer'
// import { Link } from 'react-router-dom'
// import { cdn_url_img } from './config'
// import { filterData } from './utils/helper'
// import { useOnline } from './utils/useOnline'
// import UserContext from './utils/UserContext'
// // const Body = ({ user }) => {
// const Body = () => {
//   const [allRestaurants, setAllRestaurants] = useState([])
//   const [filteredRestaurants, setFilteredRestaurants] = useState([])
//   const [searchText, setSearchText] = useState('')
//   const [isLoading, setIsLoading] = useState(true)
//   const RestaurantPromotedcard = promotedlabel(RestaurantCard)
//   // console.log('Body trendered', allRestaurants)
//   const { user, setUser } = useContext(UserContext)
//   useEffect(() => {
//     getRestaurants()
//   }, [])

//   async function getRestaurants() {
//     const data = await fetch(
//       'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING',
//     )
//     const json = await data.json()

//     setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
//     setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
//   }

//   const isOnline = useOnline()

//   if (!isOnline)
//     return (
//       <div className="offline-container">
//         <h1 className="text-2xl font-bold mb-4">
//           😒 Offline, No internet connection
//         </h1>
//         <img
//           src="https://c8.alamy.com/comp/DG67YN/offline-character-laptop-showing-www-communication-status-disconnected-DG67YN.jpg"
//           alt="Offline"
//           className="offline-image"
//         />
//       </div>
//     )

//   // if (allRestaurants?.length === 0) {
//   //   return (
//   //     <h1 className="text-2xl font-bold">
//   //       No Restaurant matches your filter!!
//   //     </h1>
//   //   )
//   // }
//   return allRestaurants?.length === 0 ? (
//     <Shimmer />
//   ) : (
//     <>
//       <div className="search-container p-6 bg-gray-50 my-5 mx-5">
//         <input
//           type="text"
//           className="search-input bg-white border border-gray-300 rounded-md py-2 px-4 w-1/2"
//           placeholder="Search"
//           value={searchText}
//           onChange={(e) => {
//             setSearchText(e.target.value)
//           }}
//         />

//         <button
//           className=" p-2 m-2 text-black rounded-xl hover:bg-orange-300"
//           onClick={() => {
//             const data = filterData(searchText, allRestaurants)
//             setFilteredRestaurants(data)
//           }}
//         >
//           Search
//         </button>
//         {/* <input
//           value={user.name}
//           onChange={(e) =>
//             setUser({
//               ...user,
//               name: e.target.value,
//             })
//           }
//         ></input>
//         <input
//           value={user.email}
//           onChange={(e) =>
//             setUser({
//               ...user,
//               email: e.target.value,
//             })
//           }
//         ></input> */}
//       </div>
//       <div className=" grid grid-cols-4 gap-5 rounded">
//         {filteredRestaurants.map((restaurant) => {
//           return (
//             <Link
//               to={'/restaurant/' + restaurant.data.id}
//               key={restaurant.data.id}
//               className="text-black"
//             >
//               {restaurant.data.promoted ? (
//                 <RestaurantPromotedcard {...restaurant.data} user={user} />
//               ) : (
//                 <RestaurantCard {...restaurant.data} user={user} />
//               )}
//             </Link>
//           )
//         })}
//       </div>
//     </>
//   )
// }

// export default Body

// Make sure the path to the Shimmer component is correct
import { RestaurantCard, promotedlabel } from './RestaurantCard'
import { useState, useEffect, useContext } from 'react'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'
import { cdn_url_img } from './config'
import { filterData } from './utils/helper'
import { useOnline } from './utils/useOnline'
import UserContext from './utils/UserContext'

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [searchText, setSearchText] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const RestaurantPromotedcard = promotedlabel(RestaurantCard)

  const { user, setUser } = useContext(UserContext)

  useEffect(() => {
    getRestaurants()
  }, [])

  async function getRestaurants() {
    try {
      const data = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING',
      )
      const json = await data.json()

      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
      setIsLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error)
      setIsLoading(false)
    }
  }

  const isOnline = useOnline()

  if (!isOnline)
    return (
      <div className="offline-container">
        <h1 className="text-2xl font-bold mb-4">
          😒 Offline, No internet connection
        </h1>
        <img
          src="https://c8.alamy.com/comp/DG67YN/offline-character-laptop-showing-www-communication-status-disconnected-DG67YN.jpg"
          alt="Offline"
          className="offline-image"
        />
      </div>
    )

  return (
    <>
      <div className="search-container p-6 bg-gray-50 my-5 mx-5">
        <input
          type="text"
          className="search-input bg-white border border-gray-300 rounded-md py-2 px-4 w-1/2"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value)
          }}
        />

        <button
          className=" p-2 m-2 text-black rounded-xl hover:bg-orange-300"
          onClick={() => {
            const data = filterData(searchText, allRestaurants)
            setFilteredRestaurants(data)
          }}
        >
          Search
        </button>
      </div>

      {isLoading ? (
        <Shimmer />
      ) : filteredRestaurants?.length === 0 ? (
        <h1 className="text-2xl font-bold">
          No Restaurant matches your filter!!
        </h1>
      ) : (
        <div className="grid grid-cols-4 gap-5 rounded">
          {filteredRestaurants.map((restaurant) => (
            <Link
              to={'/restaurant/' + restaurant.data.id}
              key={restaurant.data.id}
              className="text-black"
            >
              {restaurant.data.promoted ? (
                <RestaurantPromotedcard {...restaurant.data} user={user} />
              ) : (
                <RestaurantCard {...restaurant.data} user={user} />
              )}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}

export default Body
