const initialState = {}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_COMPLETED_ORDERS':
      const orders = action.payload
      return {
        orders
      }

    default:
      return state
  }
}
