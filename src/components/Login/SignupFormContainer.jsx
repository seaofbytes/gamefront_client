import React from 'react'
import { connect } from 'react-redux'
import { createUser } from '../../actions/user'
import SignupForm from './SignupForm'
import '../Login/LoginFormStyle.css'

class SignupFormContainer extends React.Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  onSubmit = event => {
    const { email, password, firstName, lastName } = this.state
    event.preventDefault()
    this.props.createUser({
      email,
      password,
      firstName,
      lastName
    })

    this.setState({
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    })
  }
  render() {
    return (
      <SignupForm
        toggleModeOnClick={this.props.toggleModeOnClick}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    )
  }
}
export default connect(null, { createUser })(SignupFormContainer)
