import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    const minPrice = Math.min.apply(Math, this.props.prices)
    const maxPrice = Math.max.apply(Math, this.props.prices)
    return (
      <div id="aside" className="col-md-3">
        <div className="aside">
          <h3 className="aside-title">Categories</h3>
          <div className="checkbox-filter">
            <div className="input-checkbox">
              <input
                name="inputGroup"
                onChange={e => this.props.handleFilterAll(e)}
                type="radio"
                id="all"
              />
              <label>
                <span></span>
                All
                <small>(120)</small>
              </label>
            </div>
            <div className="input-checkbox">
              <input
                onChange={e => this.props.handleFilterAll(e)}
                name="inputGroup"
                type="radio"
                id="Playstation 4"
              />
              <label>
                <span></span>
                Playstation
                <small>(120)</small>
              </label>
            </div>

            <div className="input-checkbox">
              <input
                onChange={e => this.props.handleFilterAll(e)}
                name="inputGroup"
                type="radio"
                id="X-Box"
              />
              <label>
                <span></span>
                X-Box
                <small>(1450)</small>
              </label>
            </div>

            <div className="input-checkbox">
              <input
                onChange={e => this.props.handleFilterAll(e)}
                name="inputGroup"
                type="radio"
                id="Nintendo"
              />
              <label>
                <span></span>
                Nintendo
                <small>(578)</small>
              </label>
            </div>

            <div className="input-checkbox">
              <input
                onChange={e => this.props.handleFilterAll(e)}
                name="inputGroup"
                type="radio"
                id="PC"
              />
              <label>
                <span></span>
                PC
                <small>(120)</small>
              </label>
            </div>
            <div className="input-checkbox">
              <input
                onChange={e => this.props.handleFilterAll(e)}
                name="inputGroup"
                type="radio"
                id="Accessories"
              />
              <label>
                <span></span>
                Accessories
                <small>(120)</small>
              </label>
            </div>
          </div>
        </div>

        <div className="aside">
          <h3 className="aside-title">Price</h3>
          <div className="price-filter">
            <div className="input-number price-min">
              <input
                min={minPrice}
                id="price-min"
                type="number"
                placeholder={minPrice}
                name="filterMinPrice"
                defaultValue={minPrice}
                onChange={e => this.props.handlePriceChange(e)}
              />
            </div>
            <span>-</span>
            <div className="input-number price-max">
              <input
                max={maxPrice}
                id="price-max"
                type="number"
                placeholder={maxPrice}
                name="filterMaxPrice"
                defaultValue={maxPrice}
                onChange={e => this.props.handlePriceChange(e)}
              />
              <span className="qty-up">+</span>
              <span className="qty-down">-</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
