import React, { Component } from 'react'
import { Layout, Tabs, Table } from 'element-react'

import ArticleInfo from '../components/ArticleInfo'
import ArticleHotInfo from '../components/ArticleHotInfo'
import ArticleHotRadarChart from '../components/ArticleHotRadarChart'
import ArticlePathTreeChart from '../components/ArticlePathTreeChart'
import ArticleNodeGraphChart from '../components/ArticleNodeGraphChart'
import LineChart from '../components/LineChart'

class Page extends Component {
  constructor () {
    super()
    this.state = {
      articleList: {
        articleInfo: {
          title: '糖尿病大时代',
          brief: '近日,国际糖尿病联盟(IDF)发布了全球第八版糖尿病地图.根据IDF数据显示,全球糖尿病成人患者达4.25亿',
          author: '迈德医疗',
          time: '2017-12-04 20:57:58'
        }
      },
      hotInfo: {
        hotNum: 92,
        readNum: 888,
        forwardNum: 444,
        thumbsNum: 333,
        coverNum: 2222,
        depth: 5
      },
      treeTable: {
        columns: [
          {
            label: '日期',
            prop: 'date',
            width: 180
          },
          {
            label: '姓名',
            prop: 'name',
            width: 180
          },
          {
            label: '地址',
            prop: 'address'
          }
        ],
        data: [{
          date: '2016-05-02',
          name: '王小虎',
          address: ' 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: ' 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: ' 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: ' 1526 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: ' 1536 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: ' 1546 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: ' 1556 弄'
        }]
      }
    }
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
          <Tabs.Pane label='活跃度分析' name='1'>123123
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
