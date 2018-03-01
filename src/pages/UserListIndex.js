import React, { Component } from 'react'
import { Layout } from 'element-react'
import UserList from '../components/UserList'
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
    function getUsers () {
      return axios({
        method: 'get',
        url: '/get_latest_users/7'
      })
    }

    axios.all([getUsers()])
      .then(axios.spread((users) => {
        this.setState({
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
      <Layout.Row>
        <Layout.Col span='24'>
          <UserList title={this.state.userList.title} data={this.state.userList.data} />
        </Layout.Col>
      </Layout.Row>
    )
  }
}

export default Page
