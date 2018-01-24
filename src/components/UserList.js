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
      pageInfo: {
        total: 400,
        pageSizes: [100, 200, 300, 400],
        pageSize: 20,
        currentPage: 5
      }
    }
  }

  render () {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <hr />
        {this.props.data.map((e) => (
          <Link to={'user/' + e.name} key={this.props.data.indexOf(e)}>
            <Card className='user-card'>
              <Layout.Row gutter='20'>
                <Layout.Col span='6'>
                  <img src={logo} alt='logo' />
                </Layout.Col>
                <Layout.Col span='18'>
                  <p>{e.name}</p>
                  <p>{e.time}</p>
                  <div>
                    <Button type='primary' size='mini'>活跃度:92</Button>
                    <Button type='primary' size='mini'>影响力:92</Button>
                    <Button type='primary' size='mini'>传播行为分析</Button>
                  </div>
                </Layout.Col>
              </Layout.Row>
            </Card>
          </Link>
        ))}
        <div className='pagination'>
          <Pagination layout='prev, pager, next' total={50} small />
        </div>
      </div>
    )
  }
}

TopNavbar.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array
}

export default TopNavbar
