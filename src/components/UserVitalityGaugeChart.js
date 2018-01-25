import React, { Component } from 'react'
import PropTypes from 'prop-types'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/gauge'
import 'echarts/lib/component/tooltip'

class Chart extends Component {
  // constructor (props) {
  //   super(props)
  // },
  componentDidMount () {
    let myChart = echarts.init(this.chartDom)
    myChart.setOption({
      tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
      },
      toolbox: {
        feature: {
          restore: {},
          saveAsImage: {}
        }
      },
      series: [
        {
          name: '业务指标',
          type: 'gauge',
          detail: {formatter: '{value}%'},
          data: [{value: 50, name: '完成率'}]
        }
      ]
    })
  }

  render () {
    return (
      <div ref={(chartDom) => { this.chartDom = chartDom }} style={{'height': this.props.height || '400px'}} />
    )
  }
}

Chart.propTypes = {
  height: PropTypes.string
}

export default Chart
