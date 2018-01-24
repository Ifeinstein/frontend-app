import React, { Component } from 'react'
import PropTypes from 'prop-types'
import echarts from 'echarts/lib/echarts'
import 'echarts-wordcloud'
import 'echarts/lib/component/tooltip'

class WordCloud extends Component {
  // constructor (props) {
  //   super(props)
  // },
  componentDidMount () {
    let chart = echarts.init(this.chartDom)
    chart.setOption({
      title: {text: ''},
      tooltip: {},
      series: [{
        type: 'wordCloud',
        shape: 'circle',
        // maskImage: maskImage,
        left: 'center',
        top: 'center',
        width: '90%',
        height: '100%',
        right: null,
        bottom: null,
        sizeRange: [12, 60],
        rotationRange: [-90, 90],
        rotationStep: 45,
        gridSize: 8,
        drawOutOfBound: false,
        textStyle: {
          normal: {
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            color: function () {
              return 'rgb(' + [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
              ].join(',') + ')'
            }
          },
          emphasis: {
            shadowBlur: 10,
            shadowColor: '#333'
          }
        },
        data: this.props.data
      }]
    })
  }

  render () {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <hr />
        <div ref={(chartDom) => { this.chartDom = chartDom }} style={{'height': '400px'}} />
      </div>
    )
  }
}

WordCloud.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array
}

export default WordCloud
