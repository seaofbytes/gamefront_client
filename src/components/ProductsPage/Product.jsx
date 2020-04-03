import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

export default class Product extends Component {
  displayCategoryLabels = () => {
    return this.props.categories.map(cat => {
      if (cat.name === 'Playstation 4') {
        return (
          <span
            key={cat.id}
            style={{
              border: '1px solid white',
              color: 'white',
              background: 'blue'
            }}
            className="sale"
          >
            PS4
          </span>
        )
      }
      if (cat.name === 'Nintendo') {
        return (
          <span
            key={cat.id}
            style={{
              border: '2px solid red',
              color: 'white',
              background: 'red'
            }}
            className="sale"
          >
            N
          </span>
        )
      }
      if (cat.name === 'X-box') {
        return (
          <span
            key={cat.id}
            style={{
              border: '2px solid green',
              color: 'white',
              background: 'green'
            }}
            className="sale"
          >
            PS4
          </span>
        )
      }
      if (cat.name === 'PC') {
        return (
          <span
            key={cat.id}
            style={{
              border: '2px solid black',
              color: 'white',
              background: 'black'
            }}
            className="sale"
          >
            PC
          </span>
        )
      }

      return (
        <span
          key={cat.id}
          style={{
            border: '2px solid green',
            color: 'white',
            background: 'green'
          }}
          className="sale"
        >
          X-box
        </span>
      )
    })
  }

  addtoCartButton = id => {
    if (this.props.user) {
      return (
        <div className="add-to-cart">
          <button
            onClick={() => {
              this.props.addProductToCart(id, 'add')
              toast('ADDED TO CART !', { type: 'error' })
            }}
            className="add-to-cart-btn"
          >
            <i className="fa fa-shopping-cart"></i> add to cart
          </button>
        </div>
      )
    }
  }
  render() {
    const { name, price, image, inStock, id } = this.props
    return (
      <div className="product col-md-4">
        <Link to={`/product/${id}`}>
          <div className="product-img">
            <img style={{ height: '320px' }} src={image} alt="" />
            <div className="product-label">{this.displayCategoryLabels()}</div>
          </div>
          <div className="product-body">
            <p className="product-category">Category</p>
            <h3 className="product-name">
              <p>{name}</p>
            </h3>
            <h4 className="product-price">
              ${price} <del className="product-old-price">$990.00</del>
            </h4>
            <div className="product-rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <div className="product-btns">
              <button className="quick-view">
                <i className="fa fa-eye"></i>
                <span className="tooltipp">View {name}</span>
              </button>
            </div>
          </div>
        </Link>
        {this.addtoCartButton(id)}
      </div>
    )
  }
}
