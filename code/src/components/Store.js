import React from "react"
import "./Products"
import "./Store.css"

export default class Store extends React.Component {

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
}
