import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card } from 'element-react'

class Info extends Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    return (
      <Card className='article-card'>
        <p>{this.props.title}</p>
        <p>{this.props.brief}</p>
      </Card>
    )
  }
}

Info.propTypes = {
  title: PropTypes.string,
  brief: PropTypes.string
}

export default Info
