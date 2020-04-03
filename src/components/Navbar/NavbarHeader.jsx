import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavbarHeader extends Component {
  render() {
    return (
      <div id="top-header">
        <div className="container">
          <ul className="header-links pull-left">
            <li>
              <p style={{ color: 'white', fontSize: '20' }}>
                <i className="fa fa-phone"></i> +000-00-00-00
              </p>
            </li>
            <li>
              <p style={{ color: 'white', fontSize: '20' }}>
                <i className="fa fa-envelope-o"></i> email@email.com
              </p>
            </li>
            <li>
              <p style={{ color: 'white', fontSize: '20' }}>
                <i className="fa fa-map-marker"></i> 1734 Address
              </p>
            </li>
          </ul>
          <ul className="header-links pull-right">
            <li>
              {this.props.user ? (
                <Link to="/profile">
                  {' '}
                  <i className="fa fa-user-o"></i> My Account
                </Link>
              ) : null}
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
