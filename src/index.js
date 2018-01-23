import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import { Menu } from 'element-react'

import 'element-theme-default'
import './index.css'

import Home from './pages/Home'
import HotArticle from './pages/HotArticle'
import ArticleList from './pages/ArticleListIndex'
import ArticleHotAnalysis from './pages/ArticleHotAnalysis'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Menu theme='dark' defaultActive='1' className='top-navbar' mode='horizontal' onSelect={this.onSelect}>
        <NavLink to='/' exact activeClassName='selected'><Menu.Item index='1'>首页</Menu.Item></NavLink>
        <NavLink to='/hot-article' activeClassName='selected'><Menu.Item index='2'>热门内容榜单</Menu.Item></NavLink>
        <NavLink to='/article-list' activeClassName='selected'><Menu.Item index='3'>内容分析</Menu.Item></NavLink>
        <Menu.Item index='4'>重点用户榜单</Menu.Item>
        <Menu.Item index='5'>用户分析</Menu.Item>
      </Menu>
      <div className='container'>
        <Route exact path='/' component={Home} />
        <Route path='/hot-article' component={HotArticle} />
        <Route path='/article-list' component={ArticleList} />
        <Route path='/article/:id/hot' component={ArticleHotAnalysis} />
        {/* <Route path='/VipUser' component={VipUser} /> */}
        {/* <Route path='/UserList' component={UserList} /> */}
      </div>
      <br />
    </div>
  </BrowserRouter>
), document.getElementById('root'))
registerServiceWorker()
