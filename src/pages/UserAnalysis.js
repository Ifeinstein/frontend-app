import React, { Component } from 'react'
import { Layout, Tabs } from 'element-react'

import UserInfo from '../components/UserInfo'
import LineChart from '../components/LineChart'
import UserVitalityGaugeChart from '../components/UserVitalityGaugeChart'
import UserForceRadarChart from '../components/UserForceRadarChart'
import UserLog from '../components/UserLog'

class Page extends Component {
  constructor () {
    super()
    this.state = {
      articleList: {
        title: '最新内容',
        data: [{
          title: '糖尿病大时代',
          brief: '近日,国际糖尿病联盟(IDF)发布了全球第八版糖尿病地图.根据IDF数据显示,全球糖尿病成人患者达4.25亿',
          author: '迈德医疗',
          time: '2017-12-04 20:57:58'
        }, {
          title: '糖尿病大时代2',
          brief: '近日,国际糖尿病联盟(IDF)发布了全球第八版糖尿病地图.根据IDF数据显示,全球糖尿病成人患者达4.25亿',
          author: '迈德医疗',
          time: '2017-12-04 20:57:58'
        }, {
          title: '糖尿病大时代3',
          brief: '近日,国际糖尿病联盟(IDF)发布了全球第八版糖尿病地图.根据IDF数据显示,全球糖尿病成人患者达4.25亿',
          author: '迈德医疗',
          time: '2017-12-04 20:57:58'
        }, {
          title: '糖尿病大时代4',
          brief: '近日,国际糖尿病联盟(IDF)发布了全球第八版糖尿病地图.根据IDF数据显示,全球糖尿病成人患者达4.25亿',
          author: '迈德医疗',
          time: '2017-12-04 20:57:58'
        }]
      }
    }
    this.getTabChart = this.getTabChart.bind(this)
  }

  getTabChart (tab) {
    console.log(tab)
    if (tab.props.name === '2') {
      this.refs.forceRadarChart.resizeChart()
      this.refs.forceLineChart.resizeChart()
      this.refs.spreadLineChart.resizeChart()
    }
  }

  render () {
    return (
      <div>
        <br />
        <Layout.Row>
          <Layout.Col span='24'>
            <UserInfo title='姓名' brief='数据' />
          </Layout.Col>
        </Layout.Row>
        <br />
        <Tabs type='border-card' activeName='1' onTabClick={this.getTabChart}>
          <Tabs.Pane label='活跃度分析' name='1'>
            <Layout.Col span='12'>
              <UserVitalityGaugeChart height='400px' />
            </Layout.Col>
            <Layout.Col span='12'>
              <LineChart height='400px' />
            </Layout.Col>
          </Tabs.Pane>
          <Tabs.Pane label='传播影响力分析' name='2'>
            <Layout.Col span='12'>
              <UserForceRadarChart ref='forceRadarChart' height='400px' />
            </Layout.Col>
            <Layout.Col span='12'>
              <LineChart ref='forceLineChart' height='400px' />
            </Layout.Col>
            <Layout.Col span='24'>
              <LineChart ref='spreadLineChart' height='400px' />
            </Layout.Col>
          </Tabs.Pane>
          <Tabs.Pane label='用户行为日志' name='3'>
            <UserLog title='用户行为日志' data={this.state.articleList.data} />
          </Tabs.Pane>
        </Tabs>
      </div>
    )
  }
}

export default Page
