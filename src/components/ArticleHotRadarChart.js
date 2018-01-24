import React, { Component } from 'react'
import PropTypes from 'prop-types'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/radar'
import 'echarts/lib/component/tooltip'

class ArticleHotRadarChart extends Component {
  // constructor (props) {
  //   super(props)
  // },
  componentDidMount () {
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
          {name: '阅读量', max: 6500},
          {name: '转发量', max: 16000},
          {name: '点赞量', max: 30000},
          {name: '覆盖用户数', max: 38000},
          {name: '转发深度', max: 10}
        ]
      },
      series: [{
        name: '热度分析图',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
          {
            value: [4300, 10000, 18000, 15000, 5],
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
  height: PropTypes.string
}

export default ArticleHotRadarChart
