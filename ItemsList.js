import { cdn_url_img } from './config'
import { addItem } from './cartslice'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
export const ItemsList = ({ items }) => {
  const dispatch = useDispatch()
  const [showIndex, setIndex] = useState(null)
  const addFoodItem = (items) => {
    dispatch(addItem(items))
  }
  console.log(items)
  //   console.log(items)
  return (
    <div>
      {items &&
        items.map((item) => (
          <div
            key={item.card.info.id}
            className="m-2 p-1 border-b-2 border-gray-200"
          >
            <img
              className="rounded-lg mb-4 w-10 h-10"
              src={cdn_url_img + item.card.info.imageId}
              alt="Restaurant Image"
            />
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>- Rs.({item.card.info.price / 100})</span>
            </div>
            <div className="text-xs">
              <p>{item.card.info.description}</p>
            </div>
            <div className="flex"></div>
            <h2 className="text-lg font-bold">
              {item.card.info.name}
              <button
                data-testid="addBtn"
                className="p-1 bg-green-50"
                onClick={() => addFoodItem(item)}
              >
                - Add
              </button>
            </h2>{' '}
          </div>
        ))}
    </div>
  )
}
{
  /* <h2 className="text-lg font-bold">
              {category.card?.card?.info.name}
              <button
                data-testid="addBtn"
                className="p-1 bg-green-50"
                onClick={() => addFoodItem(item)}
              >
                Add
              </button>
            </h2> */
}
// const dispatch = useDispatch()
// const [showIndex, setIndex] = useState(null)
// const addFoodItem = (item) => {
//   dispatch(addItem(item))
// }
