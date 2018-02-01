import React, { Component } from 'react'
import { Layout } from 'element-react'
import ArticleList from '../components/ArticleList'
import UserList from '../components/UserList'

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
        }, {
          title: '糖尿病大时代5',
          brief: '近日,国际糖尿病联盟(IDF)发布了全球第八版糖尿病地图.根据IDF数据显示,全球糖尿病成人患者达4.25亿',
          author: '迈德医疗',
          time: '2017-12-04 20:57:58'
        }]
      },
      userList: {
        title: '最新活跃用户',
        data: [{
          name: '用户1',
          time: '2017-12-04 20:57:58'
        }, {
          name: '用户2',
          time: '2017-12-04 20:57:58'
        }, {
          name: '用户3',
          time: '2017-12-04 20:57:58'
        }, {
          name: '用户4',
          time: '2017-12-04 20:57:58'
        }, {
          name: '用户5',
          time: '2017-12-04 20:57:58'
        }, {
          name: '用户6',
          time: '2017-12-04 20:57:58'
        }, {
          name: '用户7',
          time: '2017-12-04 20:57:58'
        }]
      }
    }
  }

  render () {
    return (
      <Layout.Row gutter='40'>
        <Layout.Col span='17'>
          <ArticleList title={this.state.articleList.title} data={this.state.articleList.data} />
        </Layout.Col>
        <Layout.Col span='7'>
          <UserList title={this.state.userList.title} data={this.state.userList.data} />
        </Layout.Col>
      </Layout.Row>
    )
  }
}

export default Page
