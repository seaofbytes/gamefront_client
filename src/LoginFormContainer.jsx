import React from 'react'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'
import { login } from '../../actions/user'

class LoginFormContainer extends React.Component {
  state = {
    email: '',
    password: ''
  }

  onSubmit = event => {
    event.preventDefault()

    // Dispatch login action
    this.props.login({
      email: this.state.email,
      password: this.state.password
    })
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <LoginForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
          toggleModeOnClick={this.props.toggleModeOnClick}
        />
      </div>
    )
  }
}

export default connect(null, { login })(LoginFormContainer)
