import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavbarLogo extends Component {
  render() {
    return (
      <div className="header-logo">
        <Link to="/products">
          {' '}
          <h1 style={{ color: 'white', marginTop: '15px' }}>GAME</h1>
        </Link>
      </div>
    )
  }
}
