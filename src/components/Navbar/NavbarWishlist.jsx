import React, { Component } from 'react'

export default class NavbarWishlist extends Component {
  render() {
    return (
      <div>
        <p>
          <i className="fa fa-heart-o"></i>
          <span>Your Wishlist</span>
          <div className="qty">2</div>
        </p>
      </div>
    )
  }
}
