import React from "react"
import {Link} from "react-router-dom"
import "./Products"
import "./Header.css"

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
      <Link to={`category/${category.slug}`}> {category.title}</Link>)
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
  console.log(this.state.store)
  let storeName="namn"
  if (this.state.store){
    storeName=this.state.store.name
  } else {
    storeName="Loading..."
  }
  return (
    <div>
    {storeName}
    {this.renderCategories()}
    </div>
  )
}
}
