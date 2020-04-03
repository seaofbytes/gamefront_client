import React from 'react'
import { connect } from 'react-redux'
import { login } from '../../actions/user'
import SignupFormContainer from './SignupFormContainer'
import LoginFormContainer from './LoginFormContainer'
import { Link } from 'react-router-dom'
import { getCurrentUser } from '../../actions/user'
import './LoginFormStyle.css'

class MainLoginPage extends React.Component {
  state = {
    email: '',
    password: '',
    loginMode: true
  }

  // Switch between login / signup
  toggleModeOnClick = () => {
    this.setState({
      ...this.state,
      loginMode: !this.state.loginMode
    })
  }

  render() {
    if (!this.props.user.jwt) {
      if (this.state.loginMode) {
        return (
          <div>
            <LoginFormContainer toggleModeOnClick={this.toggleModeOnClick} />
          </div>
        )
      } else {
        return (
          <div>
            <SignupFormContainer
              toggleModeOnClick={this.toggleModeOnClick}
            ></SignupFormContainer>
          </div>
        )
      }
    } else {
      return (
        <div style={x} className="wrapper fadeInDown ">
          <div className="section">
            <div className="container">
              <div className="row">
                <div className=" fadeIn first col-md-5 order-details">
                  <div className="section-title text-center">
                    <h3 className="title">WELCOME TO GAME</h3>
                  </div>
                  <Link to="/products">
                    {' '}
                    <p className="primary-btn order-submit">Start Shopping</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { login, getCurrentUser })(
  MainLoginPage
)

const x = {
  marginTop: '10%',
  marginLeft: '15%'
}
