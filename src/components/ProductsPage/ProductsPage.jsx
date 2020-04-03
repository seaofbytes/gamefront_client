import React, { Component } from 'react'
import { connect } from 'react-redux'

import Product from './Product'
import Pagination from '../Pagination/Pagination'

import { getAllProducts } from '../../actions/products'
import { getOrCreateCart, addProductToCart } from '../../actions/cart'
import Sidebar from './Sidebar'

class ProductList extends Component {
  state = {
    filterWord: 'all',
    filterMinPrice: 0,
    filterMaxPrice: 0,
    currentPage: 1,
    productsPerPage: 9
  }

  // Pagination
  paginate = pageNumber => {
    this.setState({ ...this.state, currentPage: pageNumber })
    console.log(pageNumber, 'PAGENUMBER')
  }

  componentDidMount() {
    this.props.getAllProducts()
    if (this.props.user) {
      this.props.getOrCreateCart()
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.allProducts !== prevProps.allProducts) {
      const prices =
        this.props.allProducts === undefined
          ? null
          : this.props.allProducts.map(product => product.price)
      const minPrice = Math.min.apply(Math, prices)
      const maxPrice = Math.max.apply(Math, prices)

      this.setState({
        ...this.state,
        filterMinPrice: minPrice,
        filterMaxPrice: maxPrice
      })
    }
  }

  handlePriceChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  handleFilterAll = e => {
    this.setState({ filterWord: e.target.id })
  }

  displayProducts = () => {
    if (this.props.allProducts) {
      const indexOfLastProduct =
        this.state.currentPage * this.state.productsPerPage
      const indexOfFirstProduct =
        indexOfLastProduct - this.state.productsPerPage

      const products = this.props.allProducts.slice(
        indexOfFirstProduct,
        indexOfLastProduct
      )

      let { allProducts } = this.props
      let filtered = []
      if (this.state.filterWord === 'all') {
        filtered = products
      } else {
        products.map(product => {
          return product.Categories.map(cat => {
            if (cat.name === this.state.filterWord) {
              return filtered.push(product)
            }
          })
        })
      }

      if (allProducts === undefined) {
        return (
          <div>
            <h3>Loading...</h3>
          </div>
        )
      } else {
        return filtered.map(product => {
          if (
            product.price >= this.state.filterMinPrice &&
            product.price <= this.state.filterMaxPrice
          ) {
            return (
              <Product
                key={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
                inStock={product.inStock}
                id={product.id}
                addProductToCart={this.props.addProductToCart}
                user={this.props.user}
                categories={product.Categories}
              ></Product>
            )
          }
        })
      }
    }
  }

  render() {
    const prices =
      this.props.allProducts === undefined
        ? null
        : this.props.allProducts.map(product => product.price)

    return (
      <div className="section">
        <div className="container">
          <div className="row">
            <Sidebar
              handlePriceChange={this.handlePriceChange}
              handleFilterAll={this.handleFilterAll}
              values={this.state}
              prices={prices}
            ></Sidebar>

            <div id="store" className="col-md-9">
              <div className="store-filter clearfix">
                <div className="store-sort"></div>
              </div>

              <div className="row">{this.displayProducts()}</div>
            </div>
            <Pagination
              paginate={this.paginate}
              productsPerPage={this.state.productsPerPage}
              totalProducts={
                this.props.allProducts !== undefined
                  ? this.props.allProducts.length
                  : null
              }
            ></Pagination>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    allProducts: state.product.allProducts,
    user: state.user.jwt
  }
}

export default connect(mapStateToProps, {
  getAllProducts,
  getOrCreateCart,
  addProductToCart
})(ProductList)
