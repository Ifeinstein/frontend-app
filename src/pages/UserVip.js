import React, { Component } from 'react'
import { Layout } from 'element-react'
import UserList from '../components/UserList'
import UserMapScatterBarChart from '../components/UserMapScatterBarChart'
import UserNumberBarChart from '../components/UserNumberBarChart'
import axios from 'axios/index'

class Page extends Component {
  constructor () {
    super()
    this.state = {
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
        url: 'http://127.0.0.1:8000/get_latest_news/3'
      })
    }

    function getUsers () {
      return axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/get_latest_users'
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
          <Layout.Col span='8'>
            <UserList title={this.state.userList.title} data={this.state.userList.data} />
          </Layout.Col>
        </Layout.Row>
        <Layout.Row>
          <Layout.Col span='24'>
            <h2>用户地域分布</h2>
            <hr />
            <UserMapScatterBarChart height='600px' />
          </Layout.Col>
          <Layout.Col span='24'>
            <h2>用户数量变化趋势</h2>
            <hr />
            <UserNumberBarChart height='600px' />
          </Layout.Col>
        </Layout.Row>
      </div>
    )
  }
}

export default Page
