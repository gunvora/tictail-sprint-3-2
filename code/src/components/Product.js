import React from "react"
import "./Product.css"
import {Link} from "react-router-dom"

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <img src={this.props.product.images[0].url} className="image" />
          <div className="title">{this.props.product.title}</div>
          <div className="price">{this.props.product.price/100} {this.props.product.currency}</div>
          <Link to={`/productpage/${this.props.product.id}` }>To product page</Link>
      </div>
    )
  }
}

export default Product
