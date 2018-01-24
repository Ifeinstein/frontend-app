import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import { Menu } from 'element-react'

import 'element-theme-default'
import './index.css'

import Home from './pages/Home'
import ArticleHot from './pages/ArticleHot'
import ArticleList from './pages/ArticleListIndex'
import ArticleAnalysis from './pages/ArticleAnalysis'
import UserVip from './pages/UserVip'
import UserList from './pages/UserListIndex'
import UserAnalysis from './pages/UserAnalysis'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Menu theme='dark' defaultActive='1' className='top-navbar' mode='horizontal' onSelect={this.onSelect}>
        <NavLink to='/' exact activeClassName='selected'><Menu.Item index='1'>首页</Menu.Item></NavLink>
        <NavLink to='/hot-article' activeClassName='selected'><Menu.Item index='2'>热门内容榜单</Menu.Item></NavLink>
        <NavLink to='/article' activeClassName='selected'><Menu.Item index='3'>内容分析</Menu.Item></NavLink>
        <NavLink to='/vip-user' activeClassName='selected'><Menu.Item index='4'>重点用户榜单</Menu.Item></NavLink>
        <NavLink to='/user' activeClassName='selected'><Menu.Item index='5'>用户分析</Menu.Item></NavLink>
      </Menu>
      <div className='container'>
        <Route exact path='/' component={Home} />
        <Route path='/hot-article' component={ArticleHot} />
        <Route exact path='/article' component={ArticleList} />
        <Route path='/article/:id' component={ArticleAnalysis} />
        <Route path='/vip-user' component={UserVip} />
        <Route exact path='/user' component={UserList} />
        <Route path='/user/:id' component={UserAnalysis} />
      </div>
      <br />
    </div>
  </BrowserRouter>
), document.getElementById('root'))
registerServiceWorker()
