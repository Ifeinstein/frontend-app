import React, { Component } from 'react'
import { Layout } from 'element-react'
import ArticleList from '../components/ArticleList'
import WordCloud from '../components/WordCloud'
import NumberCard from '../components/NumberCard'
import LineChart from '../components/LineChart'
import axios from 'axios/index'

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
        data: []
      },
      wordCloudData: testData
    }
  }
  componentDidMount () {
    function getNews () {
      return axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/get_latest_news/3'
      })
    }

    function getUsers () {
      return axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/get_latest_users'
      })
    }

    function getTransmitNumber () {
      return axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/get_total_transmit_number'
      })
    }

    function getReadNumber () {
      return axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/get_total_read_number'
      })
    }

    function getUserNumber () {
      return axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/get_total_user_number'
      })
    }

    axios.all([getNews(), getUsers()])
      .then(axios.spread((articles, users) => {
        this.setState({
          articleList: {
            title: '最新内容',
            data: articles.data
          },
          userList: {
            title: '最新活跃用户',
            data: users.data
          }
        })
      }))
      .catch((error) => {
        console.log(error)
      })

    axios.all([getTransmitNumber(), getReadNumber(), getUserNumber()])
      .then(axios.spread((transmitNumber, readNumber, userNumber) => {
        transmitNumber = transmitNumber.map()
        this.setState({//  todo
        })
      }))
      .catch((error) => {
        console.log(error)
      })
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
