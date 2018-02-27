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

    this.state = {
      articleList: {
        title: '最新内容',
        data: []
      },
      transmitNumber: {
        name: [],
        value: []
      },
      readNumber: {
        name: [],
        value: []
      },
      userNumber: {
        name: [],
        value: []
      },
      wordCloudData: []
    }
  }

  componentDidMount () {
    function getNews () {
      return axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/get_latest_news/3'
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

    function getWordCloud () {
      return axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/get_word_cloud'
      })
    }

    axios.all([getNews(), getWordCloud()])
      .then(axios.spread((articles, wordCloud) => {
        this.setState({
          articleList: {
            title: '最新内容',
            data: articles.data
          },
          wordCloudData: wordCloud.data.map(val => ({name: val[0], value: val[1]}))
        })
        this.refs.wordCloud.showChart()
      }))
      .catch((error) => {
        console.log(error)
      })

    axios.all([getTransmitNumber(), getReadNumber(), getUserNumber()])
      .then(axios.spread((transmitNumber, readNumber, userNumber) => {
        function parseNumber (e) {
          return [e.map((val) => val[0]), e.map((val) => val[1])]
        }

        this.setState({
          transmitNumber: {
            name: parseNumber(transmitNumber.data)[0],
            value: parseNumber(transmitNumber.data)[1]
          },
          readNumber: {
            name: parseNumber(readNumber.data)[0],
            value: parseNumber(readNumber.data)[1]
          },
          userNumber: {
            name: parseNumber(userNumber.data)[0],
            value: parseNumber(userNumber.data)[1]
          }
        })
        this.refs.transmitNumber.showChart()
        this.refs.readNumber.showChart()
        this.refs.userNumber.showChart()
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
            <WordCloud ref='wordCloud' title='热词' data={this.state.wordCloudData} />
          </Layout.Col>
        </Layout.Row>
        <Layout.Row>
          <h2>内容趋势</h2>
          <hr />
          <Layout.Col span='6'>
            <NumberCard title='总分享量' number='123万' percentage='+20%' />
          </Layout.Col>
          <Layout.Col span='18'>
            <LineChart ref='transmitNumber' name={this.state.transmitNumber.name}
              value={this.state.transmitNumber.value} height='400px' />
          </Layout.Col>
          <Layout.Col span='6'>
            <NumberCard title='总阅读量' number='213万' percentage='+10%' />
          </Layout.Col>
          <Layout.Col span='18'>
            <LineChart ref='readNumber' name={this.state.readNumber.name} value={this.state.readNumber.value}
              height='400px' />
          </Layout.Col>
          {/*<Layout.Col span='6'>*/}
          {/*<NumberCard title='总点赞量' number='321万' percentage='+6%' />*/}
          {/*</Layout.Col>*/}
          {/*<Layout.Col span='18'>*/}
          {/*<LineChart height='400px' />*/}
          {/*</Layout.Col>*/}
          <Layout.Col span='6'>
            <NumberCard title='总覆盖用户量' number='870万' percentage='+20%' />
          </Layout.Col>
          <Layout.Col span='18'>
            <LineChart ref='userNumber' name={this.state.userNumber.name} value={this.state.userNumber.value}
              height='400px' />
          </Layout.Col>
        </Layout.Row>
      </div>

    )
  }
}

export default Page
