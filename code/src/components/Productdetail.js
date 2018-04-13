import React from "react"
import "./productdetail.css"


export default class Productdetail extends React.Component {


  constructor(props) {
    super(props)
    this.state = { product: null }
  }

  componentDidMount() {

    const productId = this.props.match.params.productid
    console.log(productId)
    console.log(this.props)

    fetch(`https://api.tictail.com/v1.25/stores/5HSP/products/${productId}`)
      .then(resp => {
        return resp.json();
      }).then(json => {
      this.setState({product: json});
    })
  }

onClickBuy = () => {
    // Best practice är att döpa propen till samma sak som funktionen
  this.props.appComponentFunction()
}

render() {
  console.log(this.state)

  if (!this.state.product){
    return "Loading..."
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
              <div onClick={this.onClickBuy} className="product-detail-add-to-chart">Add to cart</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
}
