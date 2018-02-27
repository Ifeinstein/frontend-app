import React, { Component } from 'react'
import PropTypes from 'prop-types'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/scatter'
import 'echarts/lib/chart/bar'
import 'echarts/map/js/china'
import 'echarts/lib/component/tooltip'

class Chart extends Component {
  // constructor (props) {
  //   super(props)
  // },
  showChart () {
    let myChart = echarts.init(this.chartDom)
    let convertData = this.props.data.map(val => ({
      name: val.city,
      value: [val.longitude, val.latitude, val.user_cnt]
    }))

    let convertedData = [
      convertData,
      convertData.sort(function (a, b) {
        return b.value[2] - a.value[2]
      }).slice(0, 6)
    ]

    let option = {
      backgroundColor: '#404a59',
      animation: true,
      animationDuration: 1000,
      animationEasing: 'cubicInOut',
      animationDurationUpdate: 1000,
      animationEasingUpdate: 'cubicInOut',
      title: [
        {
          text: '用户地域分布',
          left: 'center',
          textStyle: {
            color: '#fff'
          }
        },
        {
          id: 'statistic',
          left: 90,
          top: 50,
          width: 100,
          textStyle: {
            color: '#fff',
            fontSize: 16
          }
        }
      ],
      toolbox: {
        iconStyle: {
          normal: {
            borderColor: '#fff'
          },
          emphasis: {
            borderColor: '#b1e4ff'
          }
        }
      },
      brush: {
        outOfBrush: {
          color: '#abc'
        },
        brushStyle: {
          borderWidth: 2,
          color: 'rgba(0,0,0,0.2)',
          borderColor: 'rgba(0,0,0,0.5)',
        },
        seriesIndex: [0, 1],
        throttleType: 'debounce',
        throttleDelay: 300,
        geoIndex: 0
      },
      geo: {
        map: 'china',
        left: '30',
        right: '0',
        center: [105, 36],
        zoom: 0.8,
        label: {
          emphasis: {
            show: false
          }
        },
        roam: true,
        itemStyle: {
          normal: {
            areaColor: '#323c48',
            borderColor: '#111'
          },
          emphasis: {
            areaColor: '#2a333d'
          }
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: (e) => {
          if (e.componentSubType === 'bar') {
            return `${e.name} ${e.seriesName}: ${e.value}`
          } else if (e.componentSubType === 'scatter') {
            return `${e.name} ${e.seriesName}: ${e.value[2]}`
          }
        }
      },
      grid: {
        left: 60,
        top: 100,
        bottom: 40,
        width: '30%'
      },
      xAxis: {
        type: 'value',
        scale: true,
        position: 'top',
        boundaryGap: false,
        min: 0,
        splitLine: {show: false},
        axisLine: {show: false},
        axisTick: {show: false},
        axisLabel: {margin: 2, textStyle: {color: '#aaa'}}
      },
      yAxis: {
        type: 'category',
        // name: 'TOP 20',
        inverse: true,
        nameGap: 16,
        axisLine: {show: false, lineStyle: {color: '#ddd'}},
        axisTick: {show: false, lineStyle: {color: '#ddd'}},
        axisLabel: {interval: 0, textStyle: {color: '#ddd'}},
        data: []
      },
      series: [
        {
          name: '用户数',
          type: 'scatter',
          coordinateSystem: 'geo',
          data: convertedData[0],
          symbolSize: function (val) {
            return Math.max(val[2] / 20, 8)
          },
          label: {
            normal: {
              formatter: '{b}',
              position: 'right',
              show: false
            },
            emphasis: {
              show: true
            }
          },
          itemStyle: {
            normal: {
              color: '#ddb926'
            }
          }
        },
        {
          name: 'Top 5',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: convertedData[1],
          symbolSize: function (val) {
            return Math.max(val[2] / 10, 8)
          },
          showEffectOn: 'emphasis',
          rippleEffect: {
            brushType: 'stroke'
          },
          hoverAnimation: true,
          label: {
            normal: {
              formatter: '{b}',
              position: 'right',
              show: true
            }
          },
          itemStyle: {
            normal: {
              color: '#f4e925',
              shadowBlur: 10,
              shadowColor: '#333'
            }
          },
          zlevel: 1
        },
        {
          name: '用户数',
          id: 'bar',
          zlevel: 2,
          type: 'bar',
          symbol: 'none',
          itemStyle: {
            normal: {
              color: '#ddb926'
            }
          },
          data: []
        }
      ]
    }

    myChart.on('brushselected', renderBrushed)

    function renderBrushed (params) {
      let mainSeries = params.batch[0].selected[0]

      let selectedItems = []
      let categoryData = []
      let barData = []
      let maxBar = 30
      let sum = 0
      let count = 0

      for (let i = 0; i < mainSeries.dataIndex.length; i++) {
        let rawIndex = mainSeries.dataIndex[i]
        let dataItem = convertedData[0][rawIndex]
        let pmValue = dataItem.value[2]

        sum += pmValue
        count++

        selectedItems.push(dataItem)
      }

      selectedItems.sort(function (a, b) {
        return b.value[2] - a.value[2]
      })

      for (let i = 0; i < Math.min(selectedItems.length, maxBar); i++) {
        categoryData.push(selectedItems[i].name)
        barData.push(selectedItems[i].value[2])
      }

      this.setOption({
        yAxis: {
          data: categoryData
        },
        xAxis: {
          axisLabel: {show: !!count}
        },
        title: {
          id: 'statistic',
          text: count ? '平均: ' + (sum / count).toFixed(4) : ''
        },
        series: {
          id: 'bar',
          data: barData
        }
      })
    }

    myChart.setOption(option)
  }

  render () {
    return (
      <div ref={(chartDom) => { this.chartDom = chartDom }} style={{'height': this.props.height || '200px'}} />
    )
  }
}

Chart.propTypes = {
  height: PropTypes.string,
  data: PropTypes.array
}

export default Chart
