import request from 'superagent'

const baseUrl = 'https://game-front.herokuapp.com'

// create or get user's cart and add item

export const getOrCreateCart = () => (dispatch, getState) => {
  const state = getState()
  const { user } = state
  request
    .get(`${baseUrl}/user/cart/`)
    .set('Authorization', `Bearer ${user.jwt}`)
    .then(response => {
      dispatch(checkCart(response.body))
    })
}

export const addProductToCart = (productId, quantityAction) => (
  dispatch,
  getState
) => {
  const state = getState()
  const { user } = state
  request
    .post(`${baseUrl}/user/cart/add`)
    .set('Authorization', `Bearer ${user.jwt}`)
    .send({
      productId,
      quantityAction
    })
    .then(response => {
      dispatch(addToCart(response.body[0]))
    })
}

// add to cart

export const GET_OR_CREATE_CART = 'GET_OR_CREATE_CART'
const checkCart = cart => {
  const products = cart.Products ? cart.Products : []
  return {
    type: GET_OR_CREATE_CART,
    payload: products
  }
}

// All products action creator
export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART'

const addToCart = product => {
  return {
    type: ADD_ITEM_TO_CART,
    payload: product
  }
}
