import React, { Component } from 'react'
import { Layout, Tabs, Table } from 'element-react'

import ArticleInfo from '../components/ArticleInfo'
import LineChart from '../components/LineChart'

class Page extends Component {
  constructor () {
    super()
    this.state = {}
    this.getTabChart = this.getTabChart.bind(this)
  }

  getTabChart () {
    // this.refs.treeChart.showChart()
    // this.refs.graphChart.showChart()
  }

  render () {
    return (
      <div>
        <br />
        <Layout.Row>
          <Layout.Col span='24'>
            <ArticleInfo title='标题' brief='内容摘要' />
          </Layout.Col>
        </Layout.Row>
        <br />
        <Tabs type='border-card' activeName='1' onTabClick={this.getTabChart}>
          <Tabs.Pane label='活跃度分析' name='1'>
            <LineChart height='400px' />
          </Tabs.Pane>
          <Tabs.Pane label='传播影响力分析' name='2'>123123
          </Tabs.Pane>
          <Tabs.Pane label='用户行为日志' name='3'>123123
          </Tabs.Pane>
        </Tabs>
      </div>
    )
  }
}

export default Page
