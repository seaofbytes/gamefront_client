import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCompletedOrders } from '../../actions/order'
import UserInfo from './UserInfo'

class UserProfilePage extends Component {
  componentDidMount() {
    this.props.getCompletedOrders()
  }

  render() {
    return (
      <div>
        <UserInfo completedOrders={this.props.completedOrders}></UserInfo>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  completedOrders: state.order.orders
})

export default connect(mapStateToProps, { getCompletedOrders })(UserProfilePage)
