import React from "react"
import "./Sidebar.css"


class Sidebar extends React.Component {
  onClick = (category) => {

  }

  render() {
    const sidebar = this.props.categories.map((sidebar) => {
      return (
      <div onClick={(sidebar) =>
        this.onClick(sidebar)
      }>
      {sidebar.title}
      </div>
    )
    })
    return (
      <div className="sidebar">
      {sidebar}
      </div>
    )
  }
}

export default Sidebar
