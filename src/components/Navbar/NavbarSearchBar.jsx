import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavbarSearchBar extends Component {
  render() {
    return (
      <div className="col-md-6">
        <div className="header-search">
          <form onSubmit={e => this.props.handleSubmit(e)}>
            <select className="input-select">
              <option value="0">All Categories</option>
              <option value="1">Category 01</option>
              <option value="1">Category 02</option>
            </select>
            <input
              className="input"
              onChange={e => this.props.handleChange(e)}
              placeholder="Search here"
            />
            <Link to="/search-results">
              <button className="search-btn">Search</button>
            </Link>
          </form>
        </div>
      </div>
    )
  }
}
