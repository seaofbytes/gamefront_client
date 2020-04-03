import request from 'superagent'

const baseUrl = 'https://game-front.herokuapp.com'

// Get all products
export const getSingleProduct = id => (dispatch, getState) => {
  request
    .get(`${baseUrl}/product/${id}`)
    .then(response => {
      dispatch(singleProduct(response.body))
    })
    .catch(error => console.log(error))
}

// All products action creator
export const SINGLE_PRODUCT = 'SINGLE_PRODUCT'

const singleProduct = product => {
  return {
    type: SINGLE_PRODUCT,
    payload: product
  }
}
