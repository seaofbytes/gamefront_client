import React, { Component } from 'react'
import { connect } from 'react-redux'
import CheckoutInfo from './CheckoutInfo'

export class CheckoutPage extends Component {
  render() {
    return (
      <div>
        <CheckoutInfo
          user={this.props.user}
          cartProducts={this.props.cart}
        ></CheckoutInfo>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  user: state.user
})

export default connect(mapStateToProps, {})(CheckoutPage)
