import React, { Component } from 'react'
import PropTypes from 'prop-types'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'

class WordCloud extends Component {
  // constructor (props) {
  //   super(props)
  // },
  componentDidMount () {
    this.myChart = echarts.init(this.chartDom)
    this.myChart.setOption({
      grid: {
        right: '5%',
        top: '3%',
        bottom: '12%'
      },
      tooltip: {},
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
      }]
    })
  }

  resizeChart () {
    this.myChart.resize()
  }

  render () {
    return (
      <div ref={(chartDom) => { this.chartDom = chartDom }} style={{'height': this.props.height || '200px'}} />
    )
  }
}

WordCloud.propTypes = {
  height: PropTypes.string
}

export default WordCloud
