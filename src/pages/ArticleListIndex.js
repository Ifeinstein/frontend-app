import React, { Component } from 'react'
import { Layout } from 'element-react'
import ArticleList from '../components/ArticleList'
import axios from 'axios/index'

class Page extends Component {
  constructor () {
    super()
    this.state = {
      articleList: {
        title: '最新内容',
        data: []
      }
    }
  }

  componentDidMount () {
    function getNews () {
      return axios({
        method: 'get',
        url: '/get_latest_news/5'
      })
    }

    function getUsers () {
      return axios({
        method: 'get',
        url: '/get_latest_users/8'
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
