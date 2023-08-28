import { cdn_url_img } from './config.js'
export const RestaurantCard = ({
  lastMileTravelString,
  name,
  cuisines,
  cloudinaryImageId,
  costForTwoString,
  user,
}) => {
  return (
    <div className="card w-[300px] p-2 m-5 shadow-md hover:">
      <img src={cdn_url_img + cloudinaryImageId} />
      <h3 className="font-bold text-xl">{name}</h3>
      {/* <h3>{cuisines.join(',')}</h3> */}
      <h3>{costForTwoString}</h3>
      <h3>{lastMileTravelString}</h3>
      {/* <h3>{user.name}</h3>
      <h3>{user.email}</h3> */}
    </div>
  )
}
//So here promoted label is a component that takes Restcard as input and returns a component(Which is a function line number->24)
export const promotedlabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="p-2 m-1 absolute bg-color bg-black text-white rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}
