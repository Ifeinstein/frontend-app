import React, { Component } from 'react'
import { Layout } from 'element-react'
import axios from 'axios'
import ArticleList from '../components/ArticleList'
import UserList from '../components/UserList'

class Page extends Component {
  constructor () {
    super()
    this.state = {
      articleList: {
        title: '最新内容',
        data: []
      },
      userList: {
        title: '最新活跃用户',
        data: []
      }
    }
  }

  componentDidMount () {
    function getNews () {
      return axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/get_latest_news/5'
      })
    }

    function getUsers () {
      return axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/get_latest_users/8'
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
      <Layout.Row gutter='30'>
        <Layout.Col span='16'>
          <ArticleList title={this.state.articleList.title} data={this.state.articleList.data} />
        </Layout.Col>
        <Layout.Col span='8'>
          <UserList title={this.state.userList.title} data={this.state.userList.data} />
        </Layout.Col>
      </Layout.Row>
    )
  }
}

export default Page
