import React from "react"
import "./productdetail.css"


export default class Productdetail extends React.Component {


  constructor(props) {
    super(props)
    this.state = { product: null }
  }

  componentDidMount() {

    const productId = this.props.match.params.productId
    console.log(productId)

    fetch(`https://api.tictail.com/v1.25/stores/5HSP/products/${productId}`)
      .then(resp => {
        return resp.json();
      }).then(json => {
      this.setState({product: json});
    })
  }

render() {
  console.log(this.props)
  console.log(this.state)

  if (!this.state.product){
    return null
  }
  return (
    <div>
      <div className="product-detail">
        <img className="product-detail-img" src={this.state.product.images[0].url} />
        <div className="product-detail-title">{this.state.product.title}</div>
        <div className="product-detail-price">{this.state.product.price/100} {this.state.product.currency}</div>
      </div>
    </div>
  )
}
}
