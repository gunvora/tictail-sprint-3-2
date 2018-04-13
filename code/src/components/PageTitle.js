import React from 'react'
import './PageTitle.css'

export default class PageTitle extends React.Component {

  adderaSiffror() {
    const siffra1 = this.props.siffra1
    const siffra2 = this.props.siffra2

    return siffra1 + siffra2
  }

  render() {
    console.log('this.props', this.props)
    return  (
      <div className="page-title">
        {this.props.titelPåSidan}
        <div className="subtitle">
          {this.props.underRubrik}
        </div>
        <div>
        Summan blir: {this.adderaSiffror()}
        </div>
      </div>
    )
  }
}
