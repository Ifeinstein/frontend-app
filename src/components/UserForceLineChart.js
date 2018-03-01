import React, { Component } from 'react'
import PropTypes from 'prop-types'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'

class Chart extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: [],
      value: []
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
        data: this.props.data || this.state.value,
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
  data: PropTypes.array
}

export default Chart
