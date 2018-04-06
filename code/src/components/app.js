import React from "react"
import Products from "./Products"
import "./app.css"
import Sidebar from "./Sidebar"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { store: null, products: [], categories: [] }
  }

  componentDidMount() {
    fetch("https://api.tictail.com/v1.25/stores/5HSP")
      .then(resp => {
        return resp.json();
      }).then(json => {
        this.setState({store: json});
        return fetch('https://api.tictail.com/v1.25/stores/5HSP/products')
      }).then(resp => {
        return resp.json()
      }).then(json => {
        //products
        this.setState({products: json})
        return fetch ("https://api.tictail.com/v1.25/stores/5HSP/categories")
      }).then((resp) => {
        return resp.json()
      }).then((json) => {
        console.log('categories', json)
        this.setState({categories: json})
      })
}

renderCategories = (categories) => {
  const cat = categories.map((category) => {
    return (
      <div
      onClick={() => {
        this.setState({filtered: category.title})
      }}
      >{category.title}</div>)
} )
return (
  <div className="sidebar">
    <div onClick={() => {
      this.setState({filtered: null})
    }}>all</div>
    {cat}
    </div>
)
}


  render() {
    console.log(this.state)
    if (!this.state.store) return null

    return (
      <div className="container">
        {this.state.store.name}
        <div className="main">
        {this.renderCategories(this.state.categories)}
        <Products products={this.state.products} filtered={this.state.filtered}/>
        </div>
      </div>
    )
  }

}

export default App
