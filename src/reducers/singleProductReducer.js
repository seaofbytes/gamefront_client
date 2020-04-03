import { SINGLE_PRODUCT } from '../actions/singleProduct'

const initialState = {}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SINGLE_PRODUCT:
      const product = action.payload
      return {
        product
      }

    default:
      return state
  }
}
