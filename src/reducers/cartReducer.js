import { ADD_ITEM_TO_CART, GET_OR_CREATE_CART } from '../actions/cart'

const initialState = []

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_OR_CREATE_CART:
      return action.payload

    case ADD_ITEM_TO_CART:
      const productId = action.payload.ProductId
      const qty = action.payload.quantity

      let newState = state.map(product => {
        if (productId === product.id) {
          product.CartProducts.quantity = qty

          return product
        }
        return product
      })
      return newState

    default:
      return state
  }
}
