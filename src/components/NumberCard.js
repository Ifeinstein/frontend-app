import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card } from 'element-react'

import './NumberCard.css'

class NumberCard extends Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    return (
      <Card className='number-card'>
        <p className='title'>{this.props.title}</p>
        <p className='number'>{this.props.number}</p>
        <p className='percentage'>{this.props.percentage}</p>
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
