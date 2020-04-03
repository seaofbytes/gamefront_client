import request from 'superagent'

const baseUrl = 'https://game-front.herokuapp.com'

export const createProductReview = (rating, description, ProductId) => (
  dispatch,
  getState
) => {
  const state = getState()
  const { user } = state

  ProductId = parseInt(ProductId)

  request
    .post(`${baseUrl}/review`)
    .set('Authorization', `Bearer ${user.jwt}`)
    .send({ rating, description, ProductId })
    .then(response => console.log(response, 'TODO - CREATE REVIEW ACTION'))
}

export const getReviewsForProduct = id => (dispatch, getState) => {
  request.get(`${baseUrl}/product/${id}/review/`).then(response => {
    console.log(response.body)
  })
}

// Get all products
export const getAllProducts = () => (dispatch, getState) => {
  request
    .get(`${baseUrl}/product`)
    .then(response => {
      dispatch(allProducts(response.body))
    })
    .catch(error => console.log(error))
}

// All products action creator
export const ALL_PRODUCTS = 'ALL_PRODUCTS'

const allProducts = allProducts => {
  return {
    type: ALL_PRODUCTS,
    payload: allProducts
  }
}
