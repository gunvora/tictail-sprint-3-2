import React from "react"


export default class Productdetail extends React.Component {


  constructor(props) {
    super(props)
    this.state = { product: [] }
  }

  componentDidMount() {

    const productId = this.props.match.params.productId
    console.log(productId)

    fetch(`https://api.tictail.com/v1.25/stores/5HSP/products/${productId}`)
      .then(resp => {
        return resp.json();
      }).then(json => {
      this.setState({products: json});
    })
  }

render() {
  console.log(this.props)

  return (
    <div>Hello</div>

  )

}
}
