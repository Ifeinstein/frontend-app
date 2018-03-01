import React, { Component } from 'react'
import { Layout, Tabs, Table } from 'element-react'

import UserInfo from '../components/UserInfo'
import UserForceLineChart from '../components/UserForceLineChart'
// import UserVitalityGaugeChart from '../components/UserVitalityGaugeChart'
import UserForceRadarChart from '../components/UserForceRadarChart'
import PropTypes from 'prop-types'
import axios from 'axios/index'
import _ from 'lodash'

class Page extends Component {
  constructor () {
    super()
    this.state = {
      userActive: {
        name: [],
        data: []
      },
      userEffect: {},
      userHistoryEffect: {
        name: [],
        data: []
      },
      logs: {
        title: '用户行为日志',
        columns: [{}],
        data: [{}]
      }
    }
    this.getTabChart = this.getTabChart.bind(this)
  }

  componentDidMount () {
    let getUserActive = () => {
      return axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/get_user_active/' + this.props.match.params.id
      })
    }

    let getUserEffect = () => {
      return axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/get_now_user_effect/' + this.props.match.params.id
      })
    }

    let getUserHistoryEffect = () => {
      return axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/get_history_user_effect/' + this.props.match.params.id
      })
    }

    let getLogs = () => {
      return axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/get_user_log/' + this.props.match.params.id + '/5'
      })
    }

    axios.all([getUserActive(), getUserEffect(), getUserHistoryEffect(), getLogs()])
      .then(axios.spread((userActive, userEffect, userHistoryEffect, logs) => {
        this.setState({
          userActive: {
            name: _.keys(userActive.data),
            data: _.values(userActive.data)
          },
          userEffect: userEffect.data,
          userHistoryEffect: {
            name: _.keys(userHistoryEffect.data),
            data: _.values(userHistoryEffect.data)
          },
          logs: {
            title: '用户行为日志',
            columns: [
              {
                label: '浏览文章名',
                prop: 'title'
              }, {
                label: '文章简介',
                prop: 'introduction'
              }, {
                label: '时间',
                prop: 'updatedAt'
              }
            ],
            data: logs.data
          }
        })
        this.refs.userActiveLineChart.showChart()
      }))
      .catch((error) => {
        console.log(error)
      })
  }

  getTabChart (tab) {
    if (tab.props.name === '2') {
      this.refs.forceRadarChart.showChart()
      this.refs.historyEffectChart.showChart()
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
            <Layout.Col span='24'>
              <UserForceLineChart ref='userActiveLineChart' name={this.state.userActive.name}
                data={this.state.userActive.data} height='400px' />
            </Layout.Col>
          </Tabs.Pane>
          <Tabs.Pane label='传播影响力分析' name='2'>
            <Layout.Col span='12'>
              <UserForceRadarChart data={this.state.userEffect} ref='forceRadarChart' height='400px' />
            </Layout.Col>
            <Layout.Col span='12'>
              <UserForceLineChart name={this.state.userHistoryEffect.name} data={this.state.userHistoryEffect.data}
                ref='historyEffectChart' height='400px' />
            </Layout.Col>
          </Tabs.Pane>
          <Tabs.Pane label='用户行为日志' name='3'>
            <Table
              style={{width: '100%'}}
              columns={this.state.logs.columns}
              data={this.state.logs.data}
              border
            />
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
