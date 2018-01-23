import React, { Component } from 'react'
import PropTypes from 'prop-types'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'

class WordCloud extends Component {
  // constructor (props) {
  //   super(props)
  // },
  componentDidMount () {
    let lineChart = echarts.init(this.chartDom)
    lineChart.setOption({
      grid: {
        right: '5%',
        top: '3%',
        bottom: '12%'
      },
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

  render () {
    return (
      <div ref={(chartDom) => { this.chartDom = chartDom }} style={{'height': '200px'}} />
    )
  }
}

// WordCloud.propTypes = {
//   data: PropTypes.array
// }

export default WordCloud
