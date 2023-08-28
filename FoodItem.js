// import { cdn_url_img } from './config.js'
// const FoodItem = ({ name, category, description }) => {
//   return (
//     <div className="w-56 h-40 p-2 m-2 shadow-lg bg-pink-50">
//       {/* <img src={cdn_url_img + imageId} /> */}
//       {/* {/* <h2 className="font-bold text-xl">{name}</h2> */}
//       <h2>{description}</h2>
//       <h2> {category}</h2>
//       <h4> {name}</h4>
//     </div>
//   )
// }
// export default FoodItem
import { cdn_url_img } from './config'
const FoodItem = ({ item }) => {
  const { id, name, category, description, imageId, price } = item.card?.info

  return (
    <div className="w-56 h-100 p-2 m-2 flex flex-wrap shadow-lg bg-pink-50">
      <div className="grid">
        <img
          className="rounded-lg grid"
          src={cdn_url_img + imageId}
          alt="Food Item Image"
        />
      </div>
      <h4 className="font-bold text-xl">{name}</h4>
      <h4>Category: {category}</h4>
      <h4>ID: {id}</h4>
      <h4>Price: {price}</h4>
    </div>
  )
}

export default FoodItem
