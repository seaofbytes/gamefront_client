import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

export default class CheckoutInfo extends Component {
  state = {
    products: [],
    totalPrice: 0,
    orderComplete: false
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

  handleToken = async (token, addresses) => {
    const { products } = this.state
    const options = {
      headers: { Authorization: `Bearer ${this.props.user.jwt}` }
    }
    const response = await axios.post(
      'https://game-front.herokuapp.com/checkout',
      {
        token,
        products
      },
      options
    )
    const { status } = response.data
    // console.log('Response:', response.data)
    if (status === 'success') {
      toast('Success! Check email for details', { type: 'success' })
      this.setState({ ...this.state, orderComplete: true })
    } else {
      toast('Something went wrong', { type: 'error' })
    }
  }

  displayCartProducts = () => {
    return this.state.products.map((product, i) => {
      return (
        <div className="order-col">
          <div>{product.product.name}</div>
          <div>{this.state.products[i].total}</div>
        </div>
      )
    })
  }

  render() {
    if (!this.state.orderComplete) {
      return (
        <div style={y}>
          <div className="section">
            <div className="container">
              <div className="row">
                <div className="col-md-5 order-details">
                  <div className="section-title text-center">
                    <h3 className="title">Your Order</h3>
                  </div>
                  <div className="order-summary">
                    <div className="order-col">
                      <div>
                        <strong>PRODUCT</strong>
                      </div>
                      <div>
                        <strong>TOTAL</strong>
                      </div>
                    </div>
                    <div className="order-products">
                      {this.displayCartProducts()}
                    </div>
                    <div className="order-col">
                      <div>Shiping</div>
                      <div>
                        <strong>FREE</strong>
                      </div>
                    </div>
                    <div className="order-col">
                      <div>
                        <strong>TOTAL</strong>
                      </div>
                      <div>
                        <strong className="order-total">
                          ${this.state.totalPrice}
                        </strong>
                      </div>
                    </div>
                  </div>

                  <StripeCheckout
                    className="primary-btn order-submit"
                    stripeKey="pk_test_LHDSbsgU5gsmtwXpsJsj2XoA00OTqUrdE1"
                    token={this.handleToken}
                    billingAddress
                    shippingAddress
                    amount={this.state.totalPrice * 100}
                  ></StripeCheckout>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div style={x}>
          <div className="section">
            <div className="container">
              <div className="row">
                <div className="col-md-5 order-details">
                  <div className="section-title text-center">
                    <h3 className="title">
                      Your Order Was Completed Successfuly
                    </h3>
                  </div>
                  <Link to="/products">
                    {' '}
                    <p className="primary-btn order-submit">Go back</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

const x = {
  marginTop: '10%',
  marginLeft: '33%'
}

const y = {
  marginLeft: '33%'
}
