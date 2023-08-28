import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartslice'
const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
})
export default store

// //
// ConfigureStore()
// <Provider store={store}>
//     </Provider>
// create slice
// createSlice({
//     name:" ",
//     initalState:{
//         items:['aaa','bbb'],
//     },
//     reducers:{
//         addItem:(state,action)=>{
//             state.items(actiopn.payload)
//         }
//     }
// })
// export default creatslice.reducer;
// export const{addItem}=createslice.actions;
// ConfigureStore(
//     {
//         reducer:{
//             cart:createslice,
//         }
//     }
// )
