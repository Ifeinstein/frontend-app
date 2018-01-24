import React, { Component } from 'react'
import { Layout } from 'element-react'
import ArticleList from '../components/ArticleList'

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
  }

  render () {
    return (
      <div>
        <Layout.Row>
          <Layout.Col span='24'>
            <ArticleList title={this.state.articleList.title} data={this.state.articleList.data} />
          </Layout.Col>
        </Layout.Row>
      </div>

    )
  }
}

export default Page
