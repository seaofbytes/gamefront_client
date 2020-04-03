import { ALL_PRODUCTS } from '../actions/products'

const initialState = {}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ALL_PRODUCTS:
      const allProducts = action.payload
      return {
        allProducts
      }

    default:
      return state
  }
}
