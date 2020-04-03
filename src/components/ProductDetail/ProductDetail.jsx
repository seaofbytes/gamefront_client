import React, { Component } from 'react'
import { connect } from 'react-redux'
import RelatedProducts from './RelatedProducts'
import ProductInfo from './ProductInfo'
import DetailsDescriptionReviews from './DetailsDescriptionReviews'
import { getSingleProduct } from '../../actions/singleProduct'
import {
  createProductReview,
  getReviewsForProduct
} from '../../actions/products'

import { addProductToCart } from '../../actions/cart'

class ProductDetail extends Component {
  state = {
    description: '',
    rating: 0
  }

  handleChange = e => {
    e.preventDefault()

    this.setState({ [e.target.name]: e.target.value })
  }

  handleClick = e => {
    this.setState({ rating: e.target.value })
  }

  handleSubmit = e => {
    const { id } = this.props.match.params

    e.preventDefault()

    this.props.createProductReview(
      this.state.rating,
      this.state.description,
      id
    )
    this.props.getSingleProduct(id)
  }

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getSingleProduct(id)
  }
  render() {
    return (
      <div>
        <div className="section">
          <div className="container">
            <div className="row">
              <ProductInfo
                user={this.props.user}
                product={this.props.product}
                addProductToCart={this.props.addProductToCart}
              ></ProductInfo>
              <DetailsDescriptionReviews
                id={this.props.match.params.id}
                get={this.props.getReviewsForProduct}
                product={this.props.product}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                handleClick={this.handleClick}
              ></DetailsDescriptionReviews>
            </div>
          </div>
        </div>
        <RelatedProducts
          relatedProducts={this.props.relatedProducts}
        ></RelatedProducts>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    product: state.singleProduct.product,
    user: state.user.jwt,
    relatedProducts: state.product.allProducts
  }
}

export default connect(mapStateToProps, {
  getSingleProduct,
  createProductReview,
  getReviewsForProduct,
  addProductToCart
})(ProductDetail)
