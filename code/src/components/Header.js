import React from "react"
import { Link } from "react-router-dom"
import "./Products"
import "./Header.css"
import logo from "./images/logo.svg"

export default class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = { store: null, categories: [] }
  }

  componentDidMount() {
    fetch("https://api.tictail.com/v1.25/stores/5HSP")
      .then(resp => {
        return resp.json();
      }).then(json => {
        this.setState({store: json});
        return fetch ("https://api.tictail.com/v1.25/stores/5HSP/categories")
      }).then((resp) => {
        return resp.json()
      }).then((json) => {
        console.log('categories', json)
        this.setState({categories: json})
      })
  }

  renderCategories = () => {
  const cat = this.state.categories.map((category) => {
    return (
      <Link to={`/category/${category.slug}`}> {category.title}</Link>)
  } )
  return (
  <div>
    <Link to="/">All products</Link>
    {cat}
    </div>
  )
  }

render() {
  console.log(this.state.store)
  let storeName="namn"
  if (this.state.store){
    storeName=this.state.store.name
  } else {
    storeName="Loading..."
  }
  return (
    <div>
      <div className="header-title">
        <img src={logo} alt="Technigo logo" />
        <h1>{storeName}</h1>
      </div>
      <div className="header-categories">
        <p>{this.renderCategories()}</p>
      </div>
    </div>
  )
}
}
