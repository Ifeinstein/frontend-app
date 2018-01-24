import React, { Component } from 'react'
import { Layout, Tabs } from 'element-react'

import ArticleInfo from '../components/ArticleInfo'

class App extends Component {
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
      }
    }
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
        <Tabs type='border-card' activeName='1'>
          <Tabs.Pane label='用户管理' name='1'>用户管理</Tabs.Pane>
          <Tabs.Pane label='配置管理' name='2'>配置管理</Tabs.Pane>
          <Tabs.Pane label='角色管理' name='3'>角色管理</Tabs.Pane>
          <Tabs.Pane label='定时补偿任务' name='4'>定时补偿任务</Tabs.Pane>
        </Tabs>
      </div>

    )
  }
}

export default App
