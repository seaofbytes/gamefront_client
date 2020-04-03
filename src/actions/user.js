import request from 'superagent'

const baseUrl = 'https://game-front.herokuapp.com'

// Create a new user account
export const createUser = data => (dispatch, getState) => {
  request
    .post(`${baseUrl}/user`)
    .send(data)
    .then(response => {
      dispatch(newUser(response))
    })
    .catch(error => console.log(error))
}

// Login user
export const login = data => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send(data)
    .then(response => {
      const action = newLogin(response.body)
      dispatch(action)
    })
    .catch(err => console.log('from err: ', err))
}

export const getCurrentUser = () => async (dispatch, getState) => {
  const state = await getState()
  const { user } = state
  request
    .get(`${baseUrl}/users/${user.userId}`)
    .then(response => {
      dispatch(currentUser(response.body))
    })
    .catch(err => console.log(err))
}

function currentUser(user) {
  return {
    type: 'CURRENT_USER',
    payload: user
  }
}

// Create user action creator
function newUser(data) {
  return {
    type: 'NEW_USER',
    payload: data
  }
}

// New login action creator
function newLogin(payload) {
  return {
    type: 'NEW_LOGIN',
    payload: payload
  }
}
