import React, { Component } from 'react'

export default class SignupForm extends Component {
  render() {
    return (
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <img
              src="https://cdn2.iconfinder.com/data/icons/website-icons/512/User_Avatar-512.png"
              id="icon"
              alt="User Icon"
              style={{ width: '65px', margin: '10px' }}
            />
          </div>
          <h3>Sign up for an account:</h3>

          <form onSubmit={e => this.props.onSubmit(e)}>
            <input
              onChange={e => this.props.onChange(e)}
              type="text"
              id="sign up"
              className="fadeIn second"
              name="email"
              placeholder="e-mail"
              value={this.props.values.email}
            />
            <input
              onChange={e => this.props.onChange(e)}
              type="text"
              id="password"
              className="fadeIn third"
              name="password"
              placeholder="password"
              value={this.props.values.password}
            />
            <input
              onChange={e => this.props.onChange(e)}
              type="text"
              id="sign up"
              className="fadeIn second"
              name="firstName"
              placeholder="first name"
              value={this.props.values.firstName}
            />
            <input
              onChange={e => this.props.onChange(e)}
              type="text"
              id="sign up"
              className="fadeIn second"
              name="lastName"
              placeholder="last name"
              value={this.props.values.lastName}
            />
            <input type="submit" className="fadeIn fourth" value="Sign Up !" />
          </form>

          <div id="formFooter">
            <p
              onClick={() => this.props.toggleModeOnClick()}
              className="underlineHover"
            >
              Already have an account ? Log In !
            </p>
          </div>
        </div>
      </div>
    )
  }
}
