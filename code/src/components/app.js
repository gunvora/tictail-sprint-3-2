import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Products from "./Products"
import "./app.css"
import Sidebar from "./Sidebar"
import Header from "./Header"
import Store from "./Store"
import About from "./About"
import Productdetail from "./Productdetail"

class App extends React.Component {

  onClickBuyButton = () => {
    const currentCount=this.state.cartCount
    this.setState({
      cartCount: currentCount+1
    })
  }

  constructor(props) {
    super(props)
    this.state = { cartCount: 0 }
  }

  render() {
    console.log(this.state)
    return (
      <Router>
        <div>
          <Header cartCount={this.state.cartCount}/>
          <Route exact path="/products" component={Store} />
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Products} />
          <Route exact path="/category/:whatevername" component={Products} />
          <Route exact path="/productpage/:productid" render={props => <Productdetail {...props} appComponentFunction={this.onClickBuyButton}/>}/>

        </div>
      </Router>
    )
  }
}

export default App
