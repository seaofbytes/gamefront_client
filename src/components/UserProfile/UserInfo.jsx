import React, { Component } from 'react'

export default class UserInfo extends Component {
  displayOrders = () => {
    if (this.props.completedOrders) {
      return this.props.completedOrders.map((order, i) => {
        return (
          <div style={x} className="wrapper ">
            <div className="section">
              <div className="container">
                <div className="row">
                  <div className="   col-md-5 order-details">
                    <div className="section-title text-center">
                      <h3 className="title">Order {i + 1}</h3>
                      <hr></hr>
                    </div>
                    <br></br>
                    <div>
                      <h5>Name: {order.name}</h5>
                      <h5>Order Total: {order.total}</h5>
                      <br></br>
                      <h5>Shipping and billing details</h5>
                      <h5>City: {order.city}</h5>
                      <h5>Street: {order.street}</h5>
                      <h5>Zip code: {order.zipCode}</h5>
                      <h5>Country: {order.country}</h5>
                      <h5>
                        Order date: {order.createdAt.slice(0, 10)} at{' '}
                        {order.createdAt.slice(11, 20)}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })
    }
  }

  render() {
    return (
      <div>
        <h3
          style={{ marginLeft: '43%', marginTop: '55px' }}
          lassName="section-title text-center"
        >
          Your Orders:
        </h3>
        {this.displayOrders()}
      </div>
    )
  }
}

const x = {
  marginLeft: '20%'
}
