import React, { Component } from 'react'
import PropTypes from 'prop-types'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/radar'
import 'echarts/lib/component/tooltip'

class Chart extends Component {
  // constructor (props) {
  //   super(props)
  // }

  showChart () {
    this.myChart = echarts.init(this.chartDom)
    this.myChart.setOption({
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
          {name: '用户主动转发量', max: this.props.data.user_max_transmit_cnt + 3},
          {name: '用户主动浏览量', max: this.props.data.user_max_pv_cnt + 3},
          {name: '用户被转发量', max: this.props.data.user_avg_transmit_cnt * 3 + 3},
          {name: '用户被浏览量', max: this.props.data.user_avg_pv_cnt * 3 + 3},
          {name: '用户当前影响力值', max: 1}
        ]
      },
      series: [{
        name: '热度分析图',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
          {
            value: [
              this.props.data.user_transmit_cnt,
              this.props.data.user_pv_cnt,
              this.props.data.user_re_transmit_cnt,
              this.props.data.user_re_pv_cnt,
              this.props.data.hot_value
            ],
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

Chart.propTypes = {
  height: PropTypes.string,
  data: PropTypes.object
}

export default Chart
