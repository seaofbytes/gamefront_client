import React, { Component } from 'react'

import './LoginFormStyle.css'

export default class LoginForm extends Component {
  render() {
    return (
      <div className="wrapper fadeInDown">
        <h1
          style={{ margin: '100px', fontSize: '30px' }}
          className="login-ticketswap"
        >
          Welcome. Please log in or sign-up.
        </h1>
        <div id="formContent">
          <div className="fadeIn first">
            <img
              style={{ width: '20%' }}
              src="https://cdn2.iconfinder.com/data/icons/website-icons/512/User_Avatar-512.png"
              id="icon"
              alt="User Icon"
              className="loginImg"
            />
          </div>

          <form
            onSubmit={e => {
              this.props.onSubmit(e)
            }}
          >
            <input
              onChange={e => this.props.onChange(e)}
              type="text"
              id="login"
              className="fadeIn second"
              name="email"
              placeholder="login"
            />
            <input
              onChange={e => this.props.onChange(e)}
              type="text"
              id="password"
              className="fadeIn third"
              name="password"
              placeholder="password"
            />
            <button
              style={{ margin: '20px', width: '40%' }}
              type="submit"
              className="fadeIn fourth primary-btn order-submit"
              value="Log In"
            >
              Log In
            </button>
          </form>

          <div id="formFooter">
            <p
              onClick={() => this.props.toggleModeOnClick()}
              className="underlineHover"
            >
              Don't have an account ? Sign up !
            </p>
          </div>
        </div>
        <div style={{ marginTop: '50px' }}></div>
      </div>
    )
  }
}
