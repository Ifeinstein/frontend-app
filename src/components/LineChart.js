import React, { Component } from 'react'
import PropTypes from 'prop-types'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'

class Chart extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      value: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  }

  showChart () {
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
        data: this.props.name || this.state.name
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: this.props.value || this.state.value,
        type: 'line'
      }]
    })
  }

  render () {
    return (
      <div ref={(chartDom) => { this.chartDom = chartDom }} style={{'height': this.props.height || '200px'}} />
    )
  }
}

Chart.propTypes = {
  height: PropTypes.string,
  name: PropTypes.array,
  value: PropTypes.array
}

export default Chart
