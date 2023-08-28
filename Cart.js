// import { useSelector } from 'react-redux'
// import FoodItem from './FoodItem'

// const Cart = () => {
//   const cartItems = useSelector((store) => store.cart.items)

//   return (
//     <div>
//       <h1 className="font-bold text-3xl">Cart-{cartItems.length}</h1>
//       <FoodItem {...cartItems[0]} />
//     </div>
//   )
// }
// export default Cart

import { useSelector } from 'react-redux'
import FoodItem from './FoodItem'
import { useDispatch } from 'react-redux'
import { clearCart } from './cartslice'
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items)
  const dispatch = useDispatch()
  const handlebutton = () => {
    dispatch(clearCart())
  }
  return (
    <div>
      <h1 className="font-bold text-3xl">Cart - {cartItems.length}</h1>
      <button className="" onClick={() => handlebutton()}>
        clear-cart
      </button>
      <div className="flex flex-wrap">
        {cartItems.length > 0 ? (
          cartItems.map((item) => <FoodItem key={item.id} item={item} />)
        ) : (
          <p>No items in the cart.</p>
        )}
      </div>
    </div>
  )
}

export default Cart
