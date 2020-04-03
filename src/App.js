import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { toast } from 'react-toastify'
import './App.css'
import 'react-toastify/dist/ReactToastify.css'

// Components
import Navbar from './components/Navbar/Navbar'
import CartContainer from './components/Cart/CartContainer'
import ProductsPage from './components/ProductsPage/ProductsPage'
import ProductDetail from './components/ProductDetail/ProductDetail'
import MainLoginPage from './components/Login/MainLoginPage'
import CheckoutPage from './components/Checkout/CheckoutPage'
import UserProfilePage from './components/UserProfile/UserProfilePage'

toast.configure()
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={MainLoginPage}></Route>
          <Route path="/products" component={ProductsPage}></Route>
          <Route path="/cart" exact component={CartContainer}></Route>
          <Route path="/profile" exact component={UserProfilePage}></Route>
          <Route path="/checkout" exact component={CheckoutPage}></Route>
          <Route path="/product/:id" exact component={ProductDetail}></Route>
        </Switch>
      </div>
    )
  }
}
