import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Products from "./Products"
import "./app.css"
import Sidebar from "./Sidebar"
import Header from "./Header"
import Store from "./Store"
import About from "./About"

class App extends React.Component {


  render() {


    return (

      <Router>

        <div>

      <Header />




      <Route exact path="/products" component={Store} />
      <Route exact path="/about" component={About} />


      </div>

      </Router>
    )
  }

}

export default App
