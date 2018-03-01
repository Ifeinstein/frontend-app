import React, { Component } from 'react'
import PropTypes from 'prop-types'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
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
    let lineChart = echarts.init(this.chartDom)
    lineChart.setOption({
      color: ['#3398DB'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        top: '5%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: this.props.name || this.state.name,
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '直接访问',
          type: 'bar',
          barWidth: '60%',
          data: this.props.value || this.state.value
        }
      ]
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
