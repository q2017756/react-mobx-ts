import * as React from 'react'
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'

// 公用部分css
import 'antd/dist/antd.min.css'

// home组件里面的一些路由
import IndexRouters from '../containers/Index/router'

// 统一路由方法
import Routers from '../routers/routers'

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }

  render() {
    const devToolsNode = process.env.NODE_ENV === 'development' ? <DevTools /> : null
    const routes = [...IndexRouters]
    return (
      <Routers routes={routes} history={this.props.history}>
        {devToolsNode}
      </Routers>
    )
  }
}

export default observer(App)
