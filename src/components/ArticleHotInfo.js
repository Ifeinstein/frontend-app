import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card } from 'element-react'

class ArticleHotInfo extends Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    return (
      <Card header={
        <p>当前热度：{this.props.hotNum}</p>
      } style={{textAlign: 'center'}}>
        <p>阅读量：{this.props.readNum}</p>
        <p>转发量：{this.props.forwardNum}</p>
        <p>点赞量：{this.props.thumbsNum}</p>
        <p>覆盖用户数：{this.props.coverNum}</p>
        <p>转发深度：{this.props.depth}</p>
      </Card>
    )
  }
}

ArticleHotInfo.propTypes = {
  hotNum: PropTypes.number,
  readNum: PropTypes.number,
  forwardNum: PropTypes.number,
  thumbsNum: PropTypes.number,
  coverNum: PropTypes.number,
  depth: PropTypes.number
}

export default ArticleHotInfo
