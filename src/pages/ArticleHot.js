import React, { Component } from 'react'
import { Layout } from 'element-react'
import ArticleList from '../components/ArticleList'
import WordCloud from '../components/WordCloud'
import NumberCard from '../components/NumberCard'
import LineChart from '../components/LineChart'

class Page extends Component {
  constructor () {
    super()

    let testData = []
    for (let i = 0; i < 100; i++) {
      testData.push({
        name: 'test',
        value: Math.ceil(Math.random() * 10000)
      })
    }

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
        }]
      },
      wordCloudData: testData
    }
  }

  render () {
    return (
      <div>
        <Layout.Row gutter='30'>
          <Layout.Col span='13'>
            <ArticleList title={this.state.articleList.title} data={this.state.articleList.data} />
          </Layout.Col>
          <Layout.Col span='11'>
            <WordCloud title='热词' data={this.state.wordCloudData} />
          </Layout.Col>
        </Layout.Row>
        <Layout.Row>
          <h2>内容趋势</h2>
          <hr />
          <Layout.Col span='6'>
            <NumberCard title='总分享量' number='123万' percentage='+20%' />
          </Layout.Col>
          <Layout.Col span='18'>
            <LineChart height='400px' />
          </Layout.Col>
          <Layout.Col span='6'>
            <NumberCard title='总阅读量' number='213万' percentage='+10%' />
          </Layout.Col>
          <Layout.Col span='18'>
            <LineChart height='400px' />
          </Layout.Col>
          <Layout.Col span='6'>
            <NumberCard title='总点赞量' number='321万' percentage='+6%' />
          </Layout.Col>
          <Layout.Col span='18'>
            <LineChart height='400px' />
          </Layout.Col>
          <Layout.Col span='6'>
            <NumberCard title='总覆盖用户量' number='870万' percentage='+20%' />
          </Layout.Col>
          <Layout.Col span='18'>
            <LineChart height='400px' />
          </Layout.Col>
        </Layout.Row>
      </div>

    )
  }
}

export default Page
