import React, { Component } from 'react'
import { Layout, Tabs } from 'element-react'

import UserInfo from '../components/UserInfo'
import UserForceLineChart from '../components/UserForceLineChart'
import UserVitalityGaugeChart from '../components/UserVitalityGaugeChart'
import UserForceRadarChart from '../components/UserForceRadarChart'
import UserLog from '../components/UserLog'
import PropTypes from 'prop-types'
import axios from 'axios/index'

class Page extends Component {
  constructor () {
    super()
    this.state = {
      userInfo: {
        name: '最新内容',
        data: []
      },
      logs: {
        logs: '',
        data: []
      },
      userArea: []
    }
    this.getTabChart = this.getTabChart.bind(this)
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

    let getLogs = () => {
      return axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/get_user_log/' + this.props.match.params.id + '/5'
      })
    }

    axios.all([getNews(), getUsers(), getLogs()])
      .then(axios.spread((articles, users, logs) => {
        this.setState({
          articleList: {
            title: '最新内容',
            data: articles.data
          },
          userList: {
            title: '最新活跃用户',
            data: users.data
          },
          logs: {
            title: '用户行为日志',
            data: logs.data
          }
        })
      }))
      .catch((error) => {
        console.log(error)
      })
  }

  getTabChart (tab) {
    if (tab.props.name === '2') {
      this.refs.forceRadarChart.showChart()
      this.refs.forceLineChart.showChart()
      this.refs.spreadLineChart.showChart()
    }
  }

  render () {
    return (
      <div>
        <br />
        <Layout.Row>
          <Layout.Col span='24'>
            <UserInfo title={this.props.location.state.viewerName} brief={this.props.location.state.updatedAt} />
          </Layout.Col>
        </Layout.Row>
        <br />
        <Tabs type='border-card' activeName='1' onTabClick={this.getTabChart}>
          <Tabs.Pane label='活跃度分析' name='1'>
            <Layout.Col span='12'>
              <UserVitalityGaugeChart height='400px' />
            </Layout.Col>
            <Layout.Col span='12'>
              <UserForceLineChart height='400px' />
            </Layout.Col>
          </Tabs.Pane>
          <Tabs.Pane label='传播影响力分析' name='2'>
            <Layout.Col span='12'>
              <UserForceRadarChart ref='forceRadarChart' height='400px' />
            </Layout.Col>
            <Layout.Col span='12'>
              <UserForceLineChart ref='forceLineChart' height='400px' />
            </Layout.Col>
            <Layout.Col span='24'>
              <UserForceLineChart ref='spreadLineChart' height='400px' />
            </Layout.Col>
          </Tabs.Pane>
          <Tabs.Pane label='用户行为日志' name='3'>
            <UserLog title='用户行为日志' data={this.state.logs.data} />
          </Tabs.Pane>
        </Tabs>
      </div>
    )
  }
}

Page.propTypes = {
  match: PropTypes.object,
  location: PropTypes.object
}

export default Page
