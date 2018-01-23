import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Button, Layout, Pagination } from 'element-react'

import './ArticleList.css'
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
          <Card className='article-card' key={this.props.data.indexOf(e)}>
            <Layout.Row gutter='20'>
              <Layout.Col span='6'>
                <img src={logo} alt='logo' />
              </Layout.Col>
              <Layout.Col span='18'>
                <p>{e.title}</p>
                <p>{e.brief}</p>
                <p>{e.author}&emsp;{e.time}</p>
                <p>
                  <Button type='primary' size='mini'>热度：92</Button>
                  <Button type='warning' size='mini'>传播路径分析</Button>
                </p>
              </Layout.Col>
            </Layout.Row>
          </Card>
        ))}
        <div className='pagination'>
          <Pagination layout='total, prev, pager, next' total={1000} />
        </div>
      </div>
    )
  }

  onSelect () {

  }
}

TopNavbar.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array
}

export default TopNavbar
