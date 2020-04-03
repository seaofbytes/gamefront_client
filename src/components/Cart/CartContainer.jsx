import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cart from './Cart'
import { getOrCreateCart, addProductToCart } from '../../actions/cart'

class CartContainer extends Component {
  state = {
    rerender: true
  }

  componentDidMount() {
    this.props.getOrCreateCart()
  }

  rerender = () => {
    this.props.getOrCreateCart()
  }

  render() {
    return (
      <div>
        <Cart
          rerender={this.rerender}
          addProductToCart={this.props.addProductToCart}
          cartProducts={this.props.cart}
        ></Cart>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, {
  getOrCreateCart,
  addProductToCart
})(CartContainer)
