import React, { Component } from 'react'

export default class Pagination extends Component {
  render() {
    const { totalProducts, productsPerPage } = this.props

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
      pageNumbers.push(i)
    }
    console.log(totalProducts, productsPerPage, pageNumbers, 'FROM PAGINATION')
    return (
      <div>
        <nav>
          <ul className="store-pagination">
            {pageNumbers.map(number => (
              <li key={number} className="page-item">
                <p
                  onClick={() => this.props.paginate(number)}
                  className="page-link"
                >
                  {number}
                </p>
              </li>
            ))}
          </ul>
        </nav>{' '}
      </div>
    )
  }
}
