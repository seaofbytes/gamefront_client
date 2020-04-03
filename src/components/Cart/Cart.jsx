import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      totalPrice: 0
    }
  }
  static getDerivedStateFromProps = (props, state) => {
    if (!props.cartProducts) return null

    const products = props.cartProducts.map(product => {
      const total = product.CartProducts.quantity * product.price
      return {
        product,
        total
      }
    })

    const totalPrice = products.reduce((acc, currentProduct) => {
      return acc + currentProduct.total
    }, 0)

    return {
      products,
      totalPrice
    }
  }

  displayCartItems = () => {
    return this.state.products.map(({ product, total }) => {
      const { name, inStock, image, CartProducts, id } = product
      return (
        <tr>
          <td>
            <img style={{ width: '60px', height: '80px' }} src={image} />{' '}
          </td>
          <td>{name}</td>
          <td>{inStock ? 'In Stock' : 'Not available'}</td>
          <td>
            <input
              class="form-control"
              type="text"
              value={CartProducts.quantity}
            />
            <button
              style={{ marginLeft: '21%' }}
              onClick={() => {
                this.props.addProductToCart(id, 'remove')
              }}
            >
              Remove Quantity
            </button>
            <button
              style={{ marginLeft: '8%' }}
              onClick={() => {
                this.props.addProductToCart(id, 'add')
              }}
            >
              Add Quantity
            </button>
          </td>
          <td class="text-right">{total}</td>
          <td class="text-right">
            <button
              onClick={() => {
                this.props.addProductToCart(id, 'delete')
              }}
              class="btn btn-sm btn-danger"
            >
              <i class="fa fa-trash"></i>{' '}
            </button>{' '}
          </td>
        </tr>
      )
    })
  }
  render() {
    return (
      <div class="container mb-4">
        <div class="row">
          <div class="col-12">
            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col"> </th>
                    <th scope="col">Product</th>
                    <th scope="col">Available</th>
                    <th scope="col" class="text-center">
                      Quantity
                    </th>
                    <th scope="col" class="text-right">
                      Price
                    </th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                  {this.displayCartItems()}

                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <strong>Total</strong>
                    </td>
                    <td class="text-right">
                      <strong>{this.state.totalPrice} €</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="col mb-2">
            <div class="row">
              <div class="col-sm-12  col-md-6">
                <button class="btn btn-block btn-light">
                  Continue Shopping
                </button>
              </div>
              <div class="col-sm-12 col-md-6 text-right">
                <Link to="/checkout">
                  {' '}
                  <button class="btn btn-lg btn-block btn-success text-uppercase">
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td></td>
// <td>Sub-Total</td>
// <td class="text-right">255,90 €</td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// <td></td>
// <td>Shipping</td>
// <td class="text-right">6,90 €</td>
// </tr>
