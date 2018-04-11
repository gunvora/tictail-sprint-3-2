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
  console.log(this.state)

  if (!this.state.product){
    return null
  }
  return (
    <div className="product-detail-container-for-page">
      <div className="product-detail-container-for-product">
        <div className="product-detail-container-for-img">
          <img className="product-detail-img" src={this.state.product.images[0].url} />
        </div>
        <div className="product-detail-container-for-container-for-text">
          <div className="product-detail-container-for-text">
            <div className="product-detail-container-for-title-and-description">
              <div className="product-detail-title">{this.state.product.title}</div>
              <div className="product-detail-description">{this.state.product.description}</div>
            </div>
            <div className="product-detail-container-for-price-and-button">
              <div className="product-detail-price">{this.state.product.price/100} &nbsp;
                                                    {this.state.product.currency} &nbsp; </div>
              <div className="product-detail-add-to-chart">Add to chart</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
}
