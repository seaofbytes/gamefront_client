import React, { Component } from 'react'
import { connect } from 'react-redux'

// Components
import NavbarHeader from './NavbarHeader'
import NavbarLogo from './NavbarLogo'
import NavbarSearchBar from './NavbarSearchBar'
// import NavbarWishlist from './NavbarWishlist'
import NavbarCart from './NavbarCart'

import { getOrCreateCart } from '../../actions/cart'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  state = {
    searchTerm: ''
  }

  handleSubmit = e => {
    // dispatch action
  }

  handleChange = e => {
    this.setState({ searchTerm: e.target.value })
    console.log(this.state.searchTerm)
  }
  render() {
    return (
      <header>
        <NavbarHeader user={this.props.user}></NavbarHeader>
        <div id="header">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <NavbarLogo></NavbarLogo>
              </div>
              <NavbarSearchBar
                handleChange={this.handleChange}
              ></NavbarSearchBar>
              <div className="col-md-3 clearfix">
                <div className="header-ctn">
                  {this.props.user ? (
                    <NavbarCart
                      rerender={this.rerender}
                      getCart={this.props.getOrCreateCart}
                      cartProducts={this.props.cart}
                    ></NavbarCart>
                  ) : null}
                </div>
              </div>
              {!this.props.user ? (
                <Link to="/">
                  <p
                    style={{
                      color: 'white',
                      fontSize: '20',
                      marginLeft: '200px'
                    }}
                  >
                    Log in{' '}
                  </p>
                </Link>
              ) : (
                <Link to="/">
                  <p
                    style={{
                      color: 'white',
                      fontSize: '20',
                      marginLeft: '200px'
                    }}
                  >
                    Logged in{' '}
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,

    user: state.user.jwt
  }
}

export default connect(mapStateToProps, { getOrCreateCart })(Navbar)
