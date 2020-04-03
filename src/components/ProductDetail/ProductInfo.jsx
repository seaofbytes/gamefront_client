import React, { Component } from 'react'
import { toast } from 'react-toastify'

export default class ProductInfo extends Component {
  displayCategories = () => {
    return this.props.product.Categories.map(cat => {
      return <li key={Math.random() + 9}>{cat.name}</li>
    })
  }

  displayRelatedImages = () => {
    if (this.props.product) {
      return this.props.product.ProductImages.map(img => {
        return (
          <div className="product-preview">
            <img
              style={{ minWidth: '180px', minHeight: '150px' }}
              src={img.url}
              alt=""
            />
          </div>
        )
      })
    }
  }
  addToCartButton = id => {
    if (this.props.user) {
      return (
        <div>
          <div className="add-to-cart">
            <button
              onClick={e => {
                this.props.addProductToCart(id, 'add')
                toast('ADDED TO CART !', { type: 'error' })
              }}
              className="add-to-cart-btn"
            >
              <i className="fa fa-shopping-cart"></i> add to cart
            </button>
          </div>

          <ul className="product-btns">
            <li>
              <p>
                <i className="fa fa-heart-o"></i> add to wishlist
              </p>
            </li>
          </ul>
        </div>
      )
    }
  }
  render() {
    if (this.props.product === undefined) {
      return <div>Loading</div>
    } else {
      const {
        image,
        description,
        price,
        inStock,
        name,
        id
      } = this.props.product
      return (
        <div>
          <div className="col-md-5 col-md-push-2">
            <div id="product-main-img">
              <div className="product-preview">
                <img src={image} alt="" />
              </div>
            </div>
          </div>

          <div className="col-md-2  col-md-pull-5">
            <div id="product-imgs">{this.displayRelatedImages(id)}</div>
          </div>

          <div className="col-md-5">
            <div className="product-details">
              <h2 className="product-name">{name}</h2>
              <div>
                <div className="product-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-o"></i>
                </div>
                <p className="review-link">
                  {this.props.product ? this.props.product.Reviews.length : 0}{' '}
                  Review(s) |
                </p>
              </div>
              <div>
                <h3 className="product-price">
                  ${price} <del className="product-old-price">$50.00</del>
                </h3>
                <span className="product-available">
                  {inStock ? 'In Stock ' : ' Not in stock'}
                </span>
              </div>
              <p>{description}</p>

              {this.addToCartButton(id)}

              <ul className="product-links">
                <li>Category:</li>
                {this.displayCategories()}
              </ul>
            </div>
          </div>
        </div>
      )
    }
  }
}
