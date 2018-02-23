import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Card, Button, Layout, Pagination } from 'element-react'

import './UserList.css'
import logo from '../logo.svg'

class TopNavbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      // pageInfo: {
      //   total: 0,
      //   pageSizes: [100, 200, 300, 400],
      //   pageSize: 20,
      //   currentPage: 5
      // }
    }
  }

  render () {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <hr />
        {this.props.data.map((e) => (
          <Link to={'user/' + e.viewerId} key={e.viewerId}>
            <Card className='user-card'>
              <Layout.Row type='flex'>
                <Layout.Col className='user-pic' span='6'>
                  <img src={logo} alt='logo' />
                </Layout.Col>
                <Layout.Col span='18'>
                  <p className='name'>{e.viewerName}</p>
                  <p className='time'>{e.updatedAt}</p>
                </Layout.Col>
              </Layout.Row>
              <Layout.Row>
                <Layout.Col>
                  <Button type='success' size='mini'>活跃度:92</Button>
                  <Button type='primary' size='mini'>影响力:92</Button>
                  <Button type='warning' size='mini'>传播行为分析</Button>
                </Layout.Col>
              </Layout.Row>
            </Card>
          </Link>
        ))}
        {this.state.pageInfo ? (
          <div className='pagination'>
            <Pagination layout='prev, pager, next' total={50} small />
          </div>
        ) : ''}

      </div>
    )
  }
}

TopNavbar.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array
}

export default TopNavbar
