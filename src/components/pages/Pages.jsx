import React from "react"
import { Header } from "../common/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Home } from "../home/Home"
import { Footer } from "../common/Footer"
import  PaymentComponent  from "../home/PaymentComponent"
import Blog from '../home/blog/Blog.jsx';
import ContactComponent from "../home/contact"
import About from"../home/about";

export const Pages = ({ cartItems }) => {
  return (
    <>
      <Router>
        <Header cartItems={cartItems} />
        <Switch>
          <Route exact path='/'>
            <Home cartItems={cartItems} />
          </Route>
          <Route exact path="/payment">
            <PaymentComponent />
          </Route>
          <Route exact path="/Blog">
            <Blog/>
          </Route>
          <Route exact path="/Contact">
            <ContactComponent/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}
