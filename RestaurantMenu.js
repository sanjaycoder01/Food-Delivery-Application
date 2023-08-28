// import { useEffect, useState } from 'react'
// // import { useParams } from 'react-router-dom'

// import { cdn_url_img } from './config'
// import Shimmer from './Shimmer'
// import { restaurantlist } from './config'
// import { useRestaurant } from './utils/useRestaurant'
// import { addItem } from './cartslice'
// import { useDispatch } from 'react-redux'
// // export const RestaurantMenu = () => {
// //   const { resId } = useParams()
// //   const [restaurant, setRestaurant] = useState(null)

// //   useEffect(() => {
// //     getRestaurantInfo()
// //   }, [])

// //   async function getRestaurantInfo() {
// //     const data = await fetch(
// //       'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9578269&lng=77.5981177&restaurantId=354531&submitAction=ENTER',
// //     )
// //     const json = await data.json()
// //     console.log(json.data)
// //     setRestaurant(json.data)
// //   }

// //   if (!restaurant) {
// //     return <Shimmer />
// //   }

// //   return (
// //     <div>
// //       <div>
// //         <h1>{restaurant?.name}</h1>
// //         <img src={cdn_url_img + restaurant?.cloudinaryImageId} />
// //         <h2>Nmaste Restaurant</h2>
// //         <h2>{restaurant?.area}</h2>
// //         <h2>{restaurant?.city}</h2>
// //         <h2>{restaurant?.avgRating}</h2>
// //       </div>
// //     </div>
// //   )
// // }

// // const RestaurantMenu = () => {
// //   // how to read a dynamic URL params
// //   const { resId } = useParams()
// //   // Use proper names
// //   const [restaurant, setRestauraunt] = useState(null)

// //   useEffect(() => {
// //     getRestaurantInfo()
// //   }, [])

// //   async function getRestaurantInfo() {
// //     const data = await fetch(
// //       'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.2812547&lng=73.0482912&restaurantId=${resId}&submitAction=ENTER' +
// //         resId,
// //     )
// //     const json = await data.json()
// //     console.log(json.data)
// //     setRestauraunt(json.data)
// //   }
// //   return !restaurant ? (
// //     <Shimmer />
// //   ) : (
// //     <div className="menu">
// //       <div>
// //         <h1>Restaurant id: {resId}</h1>
// //         <h2>{restaurant?.name}</h2>
// //         <img
// //           src={cdn_url_img + (restaurant?.cloudinaryImageId || '')}
// //           alt="Restaurant Image"
// //         />
// //         <h3>{restaurant?.area}</h3>
// //         <h3>{restaurant?.city}</h3>
// //         <h3>{restaurant?.avgRating} stars</h3>
// //         <h3>{restaurant?.costForTwoMsg}</h3>
// //       </div>

// //       <div>
// //         <h1>Menu</h1>
// //         <ul>
// //           {Object.values(restaurant?.menu?.items || {}).map((item) => (
// //             <li key={item.id}>{item.name}</li>
// //           ))}
// //         </ul>
// //       </div>
// //     </div>
// //   )
// // }

// // const RestaurantMenu = () => {
// //   // how to read a dynamic URL params
// //   const { resId } = useParams()
// //   // Use proper names
// //   const [restaurant, setRestauraunt] = useState(null)
// //   useEffect(() => {
// //     getRestaurantInfo()
// //   }, [])
// //   async function getRestaurantInfo() {
// //     const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.2812547&lng=73.0482912&restaurantId=${resId}&submitAction=ENTER`
// //     const response = await fetch(url)
// //     const data = await response.json()
// //     console.log(data.data)
// //     setRestauraunt(data.data)
// //   }

// //   return !restaurant ? (
// //     <Shimmer />
// //   ) : (
// //     <div className="menu">
// //       <div>
// //         <h1>Restaurant id: {resId}</h1>
// //         <h2>{restaurant?.name}</h2>
// //         <img
// //           src={cdn_url_img + (restaurant?.cloudinaryImageId || '')}
// //           alt="Restaurant Image"
// //         />
// //         <h3>{restaurant?.area}</h3>
// //         <h3>{restaurant?.city}</h3>
// //         <h3>{restaurant?.avgRating} stars</h3>
// //         <h3>{restaurant?.costForTwoMsg}</h3>
// //       </div>

// //       <div>
// //         <h1>Menu</h1>
// //         <ul>
// //           {Object.values(restaurant?.menu?.items || {}).map((item) => (
// //             <li key={item.id}>{item.name}</li>
// //           ))}
// //         </ul>
// //       </div>
// //     </div>
// //   )
// // }

// // const RestaurantMenu = () => {
// //   const { resId } = useParams()
// //   const [restaurant, setRestauraunt] = useState(null)

// //   useEffect(() => {
// //     getRestaurantInfo()
// //   }, [])

// //   async function getRestaurantInfo() {
// //     const data = await fetch(
// //       `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.2812547&lng=73.0482912&restaurantId=${resId}&submitAction=ENTER`,
// //     )
// //     const json = await data.json()
// //     console.log(json?.data)
// //     setRestauraunt(json?.data)
// //   }

// //   return !restaurant ? (
// //     <Shimmer />
// //   ) : (
// //     <div className="menu">
// //       <div>
// //         <h1>Restaurant id: {resId}</h1>
// //         <h2>{restaurant?.name}</h2>
// //         <img
// //           src={cdn_url_img + (restaurant?.cloudinaryImageId || '')}
// //           alt="Restaurant Image"
// //         />
// //         <h3>{restaurant?.area}</h3>
// //         <h3>{restaurant?.city}</h3>
// //         <h3>{restaurant?.avgRating} stars</h3>
// //         <h3>{restaurant?.costForTwoMsg}</h3>
// //       </div>

// //       <div>
// //         <h1>Menu</h1>
// //         <ul>
// //           {Object.values(restaurant?.menu?.items || {}).map((item) => (
// //             <li key={item.id}>{item.name}</li>
// //           ))}
// //         </ul>
// //       </div>
// //     </div>
// //   )
// // }
// // export default RestaurantMenu
// // const RestroMenu = () => {
// //   const { resId } = useParams()
// //   // console.log(resId);

// //   const [restaurant, setRestaurant] = useState({})

// //   useEffect(() => {
// //     getRestroInfo()
// //   }, [])

// //   async function getRestroInfo() {
// //     const response = await fetch(
// //       'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.2812547&lng=73.0482912&restaurantId=${resId}&submitAction=ENTER' +
// //         resId,
// //     )
// //     const json = await response.json()
// //     console.log(json.data)
// //     console.log(json.data.cards)

// //     // setRestaurant(json.data.cards[0].card.card.info);
// //     setRestaurant(json?.data?.cards)
// //   }
// //   // console.log(restaurant[0].card.card.info);

// //   return !restaurant ? (
// //     <Shimmer />
// //   ) : (
// //     <div className="menu">
// //       <div>
// //         <h1>Restaurant id: {resId}</h1>
// //         <h2>{restaurant?.name}</h2>
// //         <img
// //           src={cdn_url_img + (restaurant?.cloudinaryImageId || '')}
// //           alt="Restaurant Image"
// //         />
// //         <h3>{restaurant?.area}</h3>
// //         <h3>{restaurant?.city}</h3>
// //         <h3>{restaurant?.avgRating} stars</h3>
// //         <h3>{restaurant?.costForTwoMsg}</h3>
// //       </div>

// //       <div>
// //         <h1>Menu</h1>
// //         <ul>
// //           {Object.values(restaurant?.menu?.items || {}).map((item) => (
// //             <li key={item.id}>{item.name}</li>
// //           ))}
// //         </ul>
// //       </div>
// //     </div>
// //   )
// // }

// // export default RestroMenu

// //
// const RestaurantMenu = () => {
//   const { resId } = useParams()
//   const restaurant = useRestaurant(resId)
//   const itemCards =
//     restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
//       ?.card?.itemCards
//   const { name, cuisines, costForTwoMessage } =
//     restaurant?.cards[0]?.card?.card?.info || {}
//   return !restaurant ? (
//     <Shimmer />
//   ) : (
//     <div className="menu  py-3 my-3 px-16 mx-16">
//       <img
//         src={
//           cdn_url_img +
//           (restaurant?.cards[0]?.card?.card?.info.cloudinaryImageId || '')
//         }
//         alt="Restaurant Image"
//       />

//       <h1>{name}</h1>
//       <div>
//         <h1>Menu</h1>
//         <div className="menu1 h-4">
//           <ul>
//             {itemCards &&
//               itemCards.map((item) => (
//                 <li key={item.card.info.id}>
//                   {item.card.info.name}-{'Rs'}
//                   {item.card.info.price || item.card.info.defaultPrice}
//                 </li>
//               ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default RestaurantMenu
// const RestaurantMenu = () => {
//   const { resId } = useParams()
//   const restaurant = useRestaurant(resId)
//   const dispatch = useDispatch()
//   // const handleItem = () => {
//   //   dispatch(addItem('grapes')) //payload:'grapes that is why we wrote action.payload in addItems function
//   // }
//   const addFoodItem = (item) => {
//     dispatch(addItem(item))
//   }
//   const itemCards =
//     restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
//       ?.card?.itemCards
//   const { name, cuisines, costForTwoMessage } =
//     restaurant?.cards[0]?.card?.card?.info || {}

//   return !restaurant ? (
//     <Shimmer />
//   ) : (
//     <div className="menu py-3 my-3 px-16 mx-16">
//       <img
//         className="rounded-lg mb-4"
//         src={
//           cdn_url_img +
//           (restaurant?.cards[0]?.card?.card?.info.cloudinaryImageId || '')
//         }
//         alt="Restaurant Image"
//       />
//       {/* <div>
//         <button className="m-2 p-2 bg-gray-300" onClick={() => handleItem()}>
//           AddItem
//         </button>
//       </div> */}
//       <h1 className="text-3xl font-bold mb-2">{name}</h1>

//       <div className="grid grid-cols-2 gap-3">
//         {itemCards &&
//           itemCards.map((item) => (
//             <div key={item.card.info.id} className="flex items-center">
//               <div className="w-8 h-8 flex-shrink-0 bg-gray-200 rounded-full mr-3"></div>
//               <div>
//                 <h2 className="text-lg font-bold">
//                   {item.card.info.name}-
//                   <button
//                     data-testid="addBtn"
//                     className="p-1 bg-green-50"
//                     onClick={() => addFoodItem(item)}
//                   >
//                     Add
//                   </button>
//                 </h2>
//                 <p className="text-grey-500">{item.card.info.description}</p>
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   )
// }
// import { useParams } from 'react-router-dom'

// import { cdn_url_img } from './config'
// import Shimmer from './Shimmer'
// import { restaurantlist } from './config'
// import { useRestaurant } from './utils/useRestaurant'
// import { addItem } from './cartSlice'
// import { useDispatch } from 'react-redux'
// import RestaurantCategory from './RestaurantCategory'
// const RestaurantMenu = () => {
//   const { resId } = useParams()
//   const restaurant = useRestaurant(resId)
//   const dispatch = useDispatch()

//   const addFoodItem = (item) => {
//     dispatch(addItem(item))
//   }

//   const itemCards =
//     restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
//       ?.card?.itemCards
//   // console.log(restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
//   const categories = restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
//     (c) =>
//       c.card?.card?.['@type'] ===
//       'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
//   )
//   // console.log(categories)
//   return !restaurant ? (
//     <Shimmer />
//   ) : (
//     <div className="menu py-3 my-3 px-16 mx-16">
//       <img
//         className="rounded-lg mb-4"
//         src={
//           cdn_url_img +
//           (restaurant?.cards[0]?.card?.card?.info.cloudinaryImageId || '')
//         }
//         alt="Restaurant Image"
//       />
//       {/* <div>
//         <button className="m-2 p-2 bg-gray-300" onClick={() => handleItem()}>
//           AddItem
//         </button>
//       </div> */}
//       <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
//       <div className="grid grid-cols-2 gap-3">
//         {itemCards &&
//           itemCards.map((item) => (
//             <div key={item.card.info.id} className="flex items-center">
//               {/* <div className="w-8 h-8 flex-shrink-0 bg-gray-200 rounded-full mr-3"></div> */}
//               <div>
//                 {/* <h2 className="text-lg font-bold">
//                   {item.card.info.name}
//                   <button
//                     data-testid="addBtn"
//                     className="p-1 bg-green-50"
//                     onClick={() => addFoodItem(item)}
//                   >
//                     Add
//                   </button>
//                 </h2> */}
//                 {/* <p className="text-grey-500">{item.card.info.description}</p> */}
//                 {categories.map((category) => (
//                   <RestaurantCategory data={category?.card?.card} />
//                 ))}
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   )
// }

// export default RestaurantMenu
import { useParams } from 'react-router-dom'
import { cdn_url_img } from './config'
import { useState } from 'react'
import Shimmer from './Shimmer'
import { restaurantlist } from './config'
import { useRestaurant } from './utils/useRestaurant'
// import { addItem } from './cartSlice'
// import { useDispatch } from 'react-redux'
import RestaurantCategory from './RestaurantCategory'

const RestaurantMenu = () => {
  const { resId } = useParams()
  const restaurant = useRestaurant(resId)
  // const dispatch = useDispatch()
  const [showIndex, setIndex] = useState(null)
  // const addFoodItem = (item) => {
  //   dispatch(addItem(item))
  // }

  const itemCards =
    restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards
  const categories = restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) =>
      c.card?.card?.['@type'] ===
      'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
  )
  // console.log(categories)
  return !restaurant ? (
    <Shimmer />
  ) : (
    // <div className="menu py-3 my-3 px-10 mx-10">
    //   <img
    //     className="rounded-lg mb-4"
    //     src={
    //       cdn_url_img +
    //       (restaurant?.cards[0]?.card?.card?.info.cloudinaryImageId || '')
    //     }
    //     alt="Restaurant Image"
    //   />
    <div className="menu py-3 my-3 px-5 mx-5">
      <img
        className="rounded-lg mb-4 mx-8 w-80 h-52"
        src={
          cdn_url_img +
          (restaurant?.cards[0]?.card?.card?.info.cloudinaryImageId || '')
        }
        alt="Restaurant Image"
      />

      <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
      {/* <div className="grid-cols-2 gap-3">
        {itemCards &&
          itemCards.map((item) => (
            <div key={item.card.info.id} className="flex items-center">
              <div>
                <h2 className="text-lg font-bold">
                  {item.card.info.name}
                  <button
                    data-testid="addBtn"
                    className="p-1 bg-green-50"
                    onClick={() => addFoodItem(item)}
                  >
                    Add
                  </button>
                </h2>
                <p className="text-grey-500">{item.card.info.description}</p>
              </div>
            </div>
          ))}
        <div> */}
      {categories &&
        categories.map((category, index) => (
          <div>
            <RestaurantCategory
              data={category?.card?.card}
              key={category?.card?.card?.id}
              showItems={index === showIndex ? true : false}
              setIndex={() => setIndex(index === showIndex ? null : index)}
            />
            {/* <h2 className="text-lg font-bold">
              {category.card?.card?.info.name}
              <button
                data-testid="addBtn"
                className="p-1 bg-green-50"
                onClick={() => addFoodItem(item)}
              >
                Add
              </button>
            </h2> */}
          </div>
        ))}
      {/* <h2 className="text-lg font-bold">
        {item.card.info.name}
        <button
          data-testid="addBtn"
          className="p-1 bg-green-50"
          onClick={() => addFoodItem(item)}
        >
          Add
        </button>
      </h2> */}
    </div>
  )
}

export default RestaurantMenu
// In the line setIndex={() => setIndex(index === showIndex ? null : index)}, setIndex is a function provided by the useState hook to update the showIndex state variable in the RestaurantMenu component.

// Here's a breakdown of the logic:

// When the title of a category is clicked, the setIndex function is called.
// The expression index === showIndex ? null : index is evaluated.
// If index is equal to the current showIndex, it means the category is already expanded, so we set showIndex to null to collapse the category (toggle off).
// If index is different from the current showIndex, it means the category is not expanded, so we set showIndex to the current index to expand that category (toggle on).
// The resulting value from the expression above is passed as an argument to the setIndex function, which updates the showIndex state variable accordingly.
// In summary, the setIndex function is responsible for toggling the visibility of the item list for each category. If the clicked category is already expanded, it collapses it by setting showIndex to null. If the clicked category is not expanded, it expands it by setting showIndex to the corresponding index value.

// //
