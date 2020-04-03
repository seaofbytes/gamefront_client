import request from 'superagent'

const baseUrl = 'https://game-front.herokuapp.com'

export const getCompletedOrders = () => (dispatch, getState) => {
  const state = getState()
  const { user } = state
  request
    .get(`${baseUrl}/orders`)
    .set('Authorization', `Bearer ${user.jwt}`)
    .then(response => {
      dispatch(completedOrders(response.body))
    })
}

export const GET_COMPLETED_ORDERS = 'GET_COMPLETED_ORDERS'
const completedOrders = orders => {
  return {
    type: GET_COMPLETED_ORDERS,
    payload: orders
  }
}
