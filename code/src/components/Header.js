import React from "react"
import "./Header.css"

class Header extends React.Component {
  render() {
    return (
      <div>
      <h1>{this.state.store.name}</h1>
      </div>
    )
  }
}





export default Header
