import React, { Component } from 'react'
import PropTypes from 'prop-types'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/tree'
import 'echarts/lib/component/tooltip'

class ArticleNodeGraphChart extends Component {
  // constructor (props) {
  //   super(props)
  // },
  showChart () {
    let data = this.props.data
    let myChart = echarts.init(this.chartDom)
    myChart.setOption({
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
      },
      series: [
        {
          type: 'tree',

          data: [data],

          top: '1%',
          left: '7%',
          bottom: '1%',
          right: '7%',

          symbolSize: 7,

          label: {
            normal: {
              position: 'left',
              verticalAlign: 'middle',
              align: 'right',
              fontSize: 9
            }
          },

          leaves: {
            label: {
              normal: {
                position: 'right',
                verticalAlign: 'middle',
                align: 'left'
              }
            }
          },

          expandAndCollapse: true,
          animationDuration: 550,
          animationDurationUpdate: 750
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

ArticleNodeGraphChart.propTypes = {
  height: PropTypes.string,
  data: PropTypes.object
}

export default ArticleNodeGraphChart
