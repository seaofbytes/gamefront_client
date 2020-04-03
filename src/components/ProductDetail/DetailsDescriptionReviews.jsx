import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class DetailsDescriptionReviews extends Component {
  state = {
    reviewSubmitted: false
  }

  displayReviewRatingStars = avgRating => {
    let starArray = []
    for (let index = 0; index < avgRating; index++) {
      starArray.push(<i className="fa fa-star"></i>)
    }

    return starArray.map(star => {
      return star
    })
  }

  displayRating = rating => {
    let arr = []
    for (let index = 0; index < rating; index++) {
      arr.push(<i value="1" className="fa fa-star"></i>)
    }
    return arr
  }

  displayAverageRating = () => {
    let result = 0
    if (this.props.product) {
      let count = 0
      const rating = this.props.product.Reviews.reduce((acc, currentVal) => {
        count += 1
        return (acc += currentVal.rating)
      }, 0)
      result = rating / count
    }
    console.log(result, 'RESULT')
    return result
  }

  displayReviews = () => {
    if (this.props.product) {
      return this.props.product.Reviews.map(review => {
        return (
          <li>
            <div className="review-heading">
              <h5 className="name">{review.name}</h5>
              <p className="date">27 DEC 2018, 8:0 PM</p>
              <div className="review-rating">
                {this.displayRating(review.rating)}
              </div>
            </div>
            <div className="review-body">
              <p>{review.description}</p>
            </div>
          </li>
        )
      })
    }
  }

  reviewSubbmitedSuccessfuly = () => {
    return (
      <div>
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-5 order-details">
                <div className="section-title text-center">
                  <h3 className="title">Your Review Submitted</h3>
                </div>
                <Link to="/products">
                  {' '}
                  <p className="primary-btn order-submit">Continue Shopping</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className="col-md-12">
          <div id="product-tab">
            <ul className="tab-nav">
              <li className="active">
                <p data-toggle="tab" href="#tab1">
                  Description
                </p>
              </li>
              <li>
                <p data-toggle="tab" href="#tab2">
                  Details
                </p>
              </li>
              <li>
                <p data-toggle="tab" href="#tab3">
                  Reviews (
                  {this.props.product
                    ? this.props.product.Reviews.length
                    : null}
                  )
                </p>
              </li>
            </ul>

            <div className="tab-content">
              <div id="tab1" className="tab-pane fade in active">
                <div className="row">
                  <div className="col-md-12">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
              </div>

              <div id="tab2" className="tab-pane fade in">
                <div className="row">
                  <div className="col-md-12">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
              </div>

              <div id="tab3" className="tab-pane fade in">
                <div className="row">
                  <div className="col-md-3">
                    <div id="rating">
                      <div className="rating-avg">
                        <h4>Average Rating</h4>
                        <span> {this.displayAverageRating()}</span>
                        <div className="rating-stars">
                          {this.displayReviewRatingStars(
                            this.displayAverageRating()
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div id="reviews">
                      <ul className="reviews">
                        {!this.state.reviewSubmitted
                          ? this.displayReviews()
                          : this.reviewSubbmitedSuccessfuly()}
                      </ul>
                      <ul className="reviews-pagination">
                        <li className="active">1</li>
                        <li>
                          <p>2</p>
                        </li>
                        <li>
                          <p>3</p>
                        </li>
                        <li>
                          <p>4</p>
                        </li>
                        <li>
                          <p>
                            <i className="fa fa-angle-right"></i>
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-3">
                    {this.props.user ? (
                      <div id="review-form">
                        <form
                          onSubmit={e => {
                            this.props.handleSubmit(e)
                            this.setState({ reviewSubmitted: true })
                          }}
                          className="review-form"
                        >
                          <textarea
                            onChange={e => this.props.handleChange(e)}
                            className="input"
                            placeholder="Your Review"
                            name="description"
                          ></textarea>
                          <div className="input-rating">
                            <span>Your Rating: </span>
                            <div className="stars">
                              <input
                                id="star5"
                                name="rating"
                                value="5"
                                type="radio"
                                onClick={e => this.props.handleClick(e)}
                              />
                              <label for="star5"></label>
                              <input
                                onClick={e => this.props.handleClick(e)}
                                id="star4"
                                name="rating"
                                value="4"
                                type="radio"
                              />
                              <label for="star4"></label>
                              <input
                                id="star3"
                                name="rating"
                                value="3"
                                type="radio"
                                onClick={e => this.props.handleClick(e)}
                              />
                              <label for="star3"></label>
                              <input
                                id="star2"
                                name="rating"
                                value="2"
                                type="radio"
                                onClick={e => this.props.handleClick(e)}
                              />
                              <label for="star2"></label>
                              <input
                                id="star1"
                                name="rating"
                                value="1"
                                type="radio"
                                onClick={e => this.props.handleClick(e)}
                              />

                              <label for="star1"></label>
                            </div>
                          </div>
                          <button className="primary-btn">Submit</button>
                        </form>
                      </div>
                    ) : (
                      <div>
                        <Link to="/">
                          <h5>Log in to write reviews</h5>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
