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
      },
      userNumber: {
        name: [],
        value: []
      }
    }
  }

  componentDidMount () {
    function getUserNumber () {
      return axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/get_user_number'
      })
    }

    function getUsers () {
      return axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/get_latest_users/4'
      })
    }

    function getUserArea () {
      return axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/get_user_area'
      })
    }

    axios.all([getUserNumber(), getUsers(), getUserArea()])
      .then(axios.spread((userNumber, users, userArea) => {
        function parseNumber (e) {
          return [e.map((val) => val[0]), e.map((val) => val[1])]
        }
        this.setState({
          userNumber: {
            name: parseNumber(userNumber.data)[0],
            value: parseNumber(userNumber.data)[1]
          },
          userList: {
            title: '最新活跃用户',
            data: users.data
          },
          userArea: userArea.data
        })
        this.refs.userNumberBarChart.showChart()
        this.refs.userAreaChart.showChart()
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
          <Layout.Col span='16'>
            <h2>用户数量变化趋势</h2>
            <hr />
            <UserNumberBarChart ref='userNumberBarChart' name={this.state.userNumber.name}
              value={this.state.userNumber.value} height='450px' />
          </Layout.Col>
        </Layout.Row>
        <Layout.Row>
          <Layout.Col span='24'>
            <h2>用户地域分布</h2>
            <hr />
            <UserMapScatterBarChart ref='userAreaChart' data={this.state.userArea} height='600px' />
          </Layout.Col>
        </Layout.Row>
      </div>
    )
  }
}

export default Page
