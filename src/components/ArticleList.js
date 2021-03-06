import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Card, Button, Layout, Pagination } from 'element-react'

import './ArticleList.css'
import logo from '../logo.svg'

class ArticleList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      // pageInfo: {
      //   total: 400,
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
          <Link to={{
            pathname: 'article/' + e.newsId,
            state: e
          }} key={e.newsId}>
            <Card className='article-card'>
              <Layout.Row type='flex' gutter='20'>
                <Layout.Col className='article-pic' span='6'>
                  <img src={logo} alt='logo' />
                </Layout.Col>
                <Layout.Col className='article-content' span='18'>
                  <p className='title'>{e.title}</p>
                  <p className='brief'>{e.introduction}</p>
                  <p className='info'>{e.writerName}&emsp;{e.createdAt}</p>
                  <div>
                    <Button type='primary' size='mini'>热度分析</Button>
                    <Button type='warning' size='mini'>传播路径分析</Button>
                  </div>
                </Layout.Col>
              </Layout.Row>
            </Card>
          </Link>
        ))}
        {this.state.pageInfo ? (
          <div className='pagination'>
            <Pagination layout='total, prev, pager, next' total={1000} />
          </div>
        ) : ''}

      </div>
    )
  }

  onSelect () {

  }
}

ArticleList.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array
}

export default ArticleList
