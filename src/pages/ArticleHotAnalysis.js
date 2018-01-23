import React, { Component } from 'react'
import { Layout } from 'element-react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      articleList: {
        articleInfo: {
          title: '糖尿病大时代',
          brief: '近日,国际糖尿病联盟(IDF)发布了全球第八版糖尿病地图.根据IDF数据显示,全球糖尿病成人患者达4.25亿',
          author: '迈德医疗',
          time: '2017-12-04 20:57:58'
        }
      }
    }
  }

  render () {
    return (
      <div>
        <Layout.Row>
          <Layout.Col span='24'>
            123123
          </Layout.Col>
        </Layout.Row>
      </div>

    )
  }
}

export default App
