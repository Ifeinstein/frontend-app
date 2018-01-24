import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card } from 'element-react'

class NumberCard extends Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    return (
      <Card>
        <p>{this.props.title}</p>
        <p>{this.props.number}</p>
        <p>{this.props.percentage}</p>
      </Card>
    )
  }
}

NumberCard.propTypes = {
  title: PropTypes.string,
  number: PropTypes.string,
  percentage: PropTypes.string
}

export default NumberCard
