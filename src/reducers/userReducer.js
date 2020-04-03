const initialState = ''
const jwt_decode = require('jwt-decode')

// User reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case 'NEW_LOGIN': {
      const decoded = jwt_decode(action.payload.jwt)
      const newUserObj = action.payload
      newUserObj.userId = decoded.userId
      return newUserObj
    }

    case 'CURRENT_USER': {
      return {
        ...state,
        currentUser: action.payload
      }
    }
    case 'NEW_USER':
      return state

    default:
      return state
  }
}
