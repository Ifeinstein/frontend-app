import React, { Component } from 'react'
import { Layout } from 'element-react'
import UserList from '../components/UserList'

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
        }, {
          name: '用户4',
          time: '2017-12-04 20:57:58'
        }, {
          name: '用户5',
          time: '2017-12-04 20:57:58'
        }]
      }
    }
  }

  render () {
    return (
      <Layout.Row>
        <Layout.Col span='8'>
          <UserList title={this.state.userList.title} data={this.state.userList.data} />
        </Layout.Col>
      </Layout.Row>
    )
  }
}

export default Page
