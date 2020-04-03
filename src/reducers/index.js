import { combineReducers } from 'redux'

// Reducers
import product from './productReducer'
import singleProduct from './singleProductReducer'
import cart from './cartReducer'
import user from './userReducer'
import order from './orderReducer'

// Root reducer
export default combineReducers({
  product,
  singleProduct,
  cart,
  user,
  order
})
