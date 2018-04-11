import React from "react"
import Product from "./Product"
import "./Products.css"

export default class Products extends React.Component {

  constructor(props) {
    super(props)
    this.state = { products: [] }
  }

  componentDidMount() {
    fetch("https://api.tictail.com/v1.25/stores/5HSP/products")
      .then(resp => {
        return resp.json();
      }).then(json => {
      this.setState({products: json});
    })
  }

  render() {

    console.log(this.props)
    const categoryName = this.props.match.params.whatevername
    console.log(categoryName)

    const products = this.state.products.filter((product) => {


      const categoryTitle = product.categories[0].slug

      if (!categoryName) return true
      if (categoryName === categoryTitle) return true
      return false
    }).map((product) => {
      return <Product product={product}/>
    })
    return (
      <div className="products">
        {products}
      </div>
    )
  }
}
