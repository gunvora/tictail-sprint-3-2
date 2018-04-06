import React from "react"
import "./Product.css"

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <img src={this.props.product.images[0].url} className="image" />
          <div className="title">{this.props.product.title}</div>
          <div className="price">{this.props.product.price/100} {this.props.product.currency}</div>
          <button>Add to chart</button>
      </div>
    )
  }
}

export default Product
