import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavbarCart extends Component {
  displayCartItems = () => {
    if (this.props.cartProducts) {
      // return this.props.cartProducts[0].Products.map(product => {
      if (this.props.cartProducts) {
        return this.props.cartProducts.map(product => {
          return (
            <div className="product-widget">
              <div className="product-img">
                <img src={product.image} alt="" />
              </div>
              <div className="product-body">
                <h3 className="product-name">
                  <p>{product.name}</p>
                </h3>
                <h4 className="product-price">
                  <span className="qty">1x</span>${product.price}
                </h4>
              </div>
              <button className="delete">
                <i className="fa fa-close"></i>
              </button>
            </div>
          )
        })
      }
    } else {
      return <div>No Items In Cart </div>
    }
  }
  render() {
    return (
      <div
        onClick={() => {
          this.props.getCart()
        }}
        className="dropdown"
      >
        <div
          className="dropdown-toggle"
          data-toggle="dropdown"
          aria-expanded="true"
        >
          <i style={x} className="fa fa-shopping-cart"></i>
          <span style={x}> CART</span>
          <div className="qty"></div>
        </div>
        <div className="cart-dropdown">
          <div className="cart-list">{this.displayCartItems()}</div>
          <div className="cart-summary">
            <small>{this.props.cartProducts.length} Item(s) selected</small>
          </div>
          <Link to="/cart">
            <h5>Go to Cart</h5>
          </Link>
        </div>
      </div>
    )
  }
}

const x = {
  color: 'white',
  fontSize: '17px',
  fontWeight: '800'
}
