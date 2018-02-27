import React, { Component } from 'react'
import { Layout, Tabs, Table } from 'element-react'

import ArticleInfo from '../components/ArticleInfo'
import ArticleHotInfo from '../components/ArticleHotInfo'
import ArticleHotRadarChart from '../components/ArticleHotRadarChart'
import ArticlePathTreeChart from '../components/ArticlePathTreeChart'
import ArticleNodeGraphChart from '../components/ArticleNodeGraphChart'
import LineChart from '../components/LineChart'
import PropTypes from 'prop-types'
import axios from 'axios/index'
import _ from 'lodash'

class Page extends Component {
  constructor (props) {
    super(props)
    this.state = {
      articleInfo: {
        title: this.props.location.state.title,
        brief: this.props.location.state.introduction,
        author: this.props.location.state.writerName,
        time: this.props.location.state.createAt
      },
      hotInfo: {
        hotNum: 92,
        readNum: 888,
        forwardNum: 444,
        coverNum: 2222
      },
      treeTable: {
        columns: [{}],
        data: [{}]
      },
      nodeTable: {
        columns: [{}],
        data: [{}]
      },
      history: {
        name: [],
        value: []
      },
      transmitTree: {}
    }
    this.getTabChart = this.getTabChart.bind(this)
  }

  componentDidMount () {
    let getNewsHot = () => {
      return axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/get_now_news_hot/' + this.props.match.params.id
      })
    }
    let getHistoryNewsHot = () => {
      return axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/get_history_news_hot/' + this.props.match.params.id
      })
    }
    let getTransmitTree = () => {
      return axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/get_transmit_tree/' + this.props.match.params.id
      })
    }
    let getImportantPath = () => {
      return axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/find_important_path/' + this.props.match.params.id
      })
    }
    let getImportantUser = () => {
      return axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/find_important_user/' + this.props.match.params.id
      })
    }

    axios.all([getNewsHot(), getHistoryNewsHot(), getTransmitTree(), getImportantPath(), getImportantUser()])
      .then(axios.spread((newsHot, histroy, transmitTree, importantPath, importantUser) => {
        this.setState({
          hotInfo: {
            hotNum: newsHot.data.hot_value,
            readNum: newsHot.data.pv_cnt,
            forwardNum: newsHot.data.transmit_cnt,
            coverNum: newsHot.data.user_cover_cnt
          },
          history: {
            name: _.keys(histroy.data),
            value: _.values(histroy.data)
          },
          transmitTree: transmitTree.data,
          treeTable: {
            columns: [
              {
                label: '用户名称',
                prop: 'name',
                width: 180
              },
              {
                label: '传播量',
                prop: 'important_value',
              }
            ],
            data: importantPath.data
          },
          nodeTable: {
            columns: [
              {
                label: '用户名称',
                prop: 'name',
                width: 180
              },
              {
                label: '影响力值',
                prop: 'hot_value'
              },
              {
                label: '阅读量',
                prop: 'pv_value'
              },
              {
                label: '转发量',
                prop: 'transmit_value'
              }
            ],
            data: importantUser.data
          }
        })
        this.refs.hotRadarChart.showChart()
        this.refs.historyNewsHot.showChart()
      }))
      .catch((error) => {
        console.log(error)
      })
  }

  getTabChart () {
    this.refs.treeChart.showChart()
    // this.refs.graphChart.showChart()
  }

  render () {
    return (
      <div>
        <br />
        <Layout.Row>
          <Layout.Col span='24'>
            <ArticleInfo title={this.state.articleInfo.title} brief={this.state.articleInfo.brief} />
          </Layout.Col>
        </Layout.Row>
        <br />
        <Tabs type='border-card' activeName='1' onTabClick={this.getTabChart}>
          <Tabs.Pane label='热度分析' name='1'>
            <Layout.Col span='10'>
              <ArticleHotInfo coverNum={this.state.hotInfo.coverNum}
                forwardNum={this.state.hotInfo.forwardNum} hotNum={this.state.hotInfo.hotNum}
                readNum={this.state.hotInfo.readNum} />
            </Layout.Col>
            <Layout.Col span='14'>
              <ArticleHotRadarChart ref='hotRadarChart' coverNum={this.state.hotInfo.coverNum}
                forwardNum={this.state.hotInfo.forwardNum} hotNum={this.state.hotInfo.hotNum}
                readNum={this.state.hotInfo.readNum} />
            </Layout.Col>
            <Layout.Col span='24'>
              <h2>热度趋势曲线</h2>
              <LineChart ref='historyNewsHot' name={this.state.history.name} value={this.state.history.value}
                height='400px' />
            </Layout.Col>
          </Tabs.Pane>
          <Tabs.Pane label='传播路径分析' name='2'>
            <Layout.Row>
              <Layout.Col span='12'>
                <h2>传播路径</h2>
                <ArticlePathTreeChart data={this.state.transmitTree} ref='treeChart' height='800px' />
              </Layout.Col>
              <Layout.Col span='12'>
                <h2>关键传播路径</h2>
                <Table
                  style={{width: '100%'}}
                  columns={this.state.treeTable.columns}
                  data={this.state.treeTable.data}
                  border
                />
                <h2>关键传播节点</h2>
                <Table
                  style={{width: '100%'}}
                  columns={this.state.nodeTable.columns}
                  data={this.state.nodeTable.data}
                  border
                />
              </Layout.Col>
            </Layout.Row>
            <Layout.Row>
              {/*<Layout.Col span='12'>*/}
              {/*<h2>传播节点</h2>*/}
              {/*<ArticleNodeGraphChart ref='graphChart' />*/}
              {/*</Layout.Col>*/}
            </Layout.Row>
          </Tabs.Pane>
        </Tabs>
      </div>
    )
  }
}

Page.propTypes = {
  location: PropTypes.object,
  match: PropTypes.object
}

export default Page
