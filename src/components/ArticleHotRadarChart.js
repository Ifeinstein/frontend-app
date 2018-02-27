import React, { Component } from 'react'
import PropTypes from 'prop-types'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/radar'
import 'echarts/lib/component/tooltip'

class ArticleHotRadarChart extends Component {
  // constructor (props) {
  //   super(props)
  // },
  showChart () {
    let lineChart = echarts.init(this.chartDom)
    lineChart.setOption({
      tooltip: {},
      radar: {
        // shape: 'circle',
        name: {
          textStyle: {
            color: '#fff',
            backgroundColor: '#999',
            borderRadius: 3,
            padding: [3, 5]
          }
        },
        radius: '80%',
        indicator: [
          {name: '阅读量', max: 3000},
          {name: '转发量', max: 1000},
          {name: '覆盖用户数', max: 1000},
          {name: '热度', max: 5}
        ]
      },
      series: [{
        name: '热度分析图',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
          {
            value: [this.props.readNum, this.props.forwardNum, this.props.coverNum, this.props.hotNum],
            name: '热度分析'
          }
        ]
      }]
    })
  }

  render () {
    return (
      <div ref={(chartDom) => { this.chartDom = chartDom }} style={{'height': this.props.height || '400px'}} />
    )
  }
}

ArticleHotRadarChart.propTypes = {
  height: PropTypes.string,
  readNum: PropTypes.number,
  forwardNum: PropTypes.number,
  coverNum: PropTypes.number,
  hotNum: PropTypes.number,
}

export default ArticleHotRadarChart
