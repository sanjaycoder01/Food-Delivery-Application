// import { ItemsList } from './ItemsList'
// import { cdn_url_img } from './config'
// const RestaurantCategory = ({ data }) => {
//   console.log(data)
//   return (
//     <div className=" w-full mx-auto my-4  max-w-md bg-gray-100 p-4 shadow-lg ">
//       <div className="">
//         <span className="font-bold">
//           {data.title} ({data.itemCards.length})
//         </span>
//         <span>⬇️</span>
//       </div>
//       {/* <p>RestaurantCard</p> */}
//       {data.itemCards && data.itemCards.length > 0 ? (
//         <ItemsList items={data.itemCards} />
//       ) : (
//         <p>No items available.</p>
//       )}
//     </div>
//   )
// }

// export default RestaurantCategory

import { useState } from 'react'
import { ItemsList } from './ItemsList'
import { cdn_url_img } from './config'

const RestaurantCategory = ({ data, showItems, setIndex }) => {
  // const [showItems, setItems] = useState()
  const handleclick = () => {
    // setItems(!showItems)
    setIndex()
  }
  console.log(data)
  return (
    <div className="bg-white w-10/12 m-8 p-4 rounded shadow">
      <div
        className="flex items-center justify-between mb-2 cursor-pointer"
        onClick={() => handleclick()}
      >
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>

      {showItems && <ItemsList items={data.itemCards} />}
    </div>
  )
}

export default RestaurantCategory
