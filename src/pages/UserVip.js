import React, { Component } from 'react'
import { Layout } from 'element-react'
import UserList from '../components/UserList'
import UserLocalMapChart from '../components/UserLocalMapChart'
import UserLocalBarChart from '../components/UserLocalBarChart'
import UserNumberBarChart from '../components/UserNumberBarChart'

class Page extends Component {
  constructor () {
    super()
    this.state = {
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
        }]
      }
    }
  }

  render () {
    return (
      <div>
        <Layout.Row>
          <Layout.Col span='24'>
            <UserList title={this.state.userList.title} data={this.state.userList.data} />
          </Layout.Col>
        </Layout.Row>
        <Layout.Row gutter='20'>
          <h2>用户地域分布</h2>
          <hr />
          <Layout.Col span='12'>
            <UserLocalMapChart height='400px' />
          </Layout.Col>
          <Layout.Col span='12'>
            <UserLocalBarChart height='400px' />
          </Layout.Col>
          <h2>用户数量变化趋势</h2>
          <hr />
          <Layout.Col span='24'>
            <UserNumberBarChart height='400px' />
          </Layout.Col>
        </Layout.Row>
      </div>
    )
  }
}

export default Page
