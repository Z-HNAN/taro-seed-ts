import '@tarojs/async-await';
import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import AppContainer from '@pages/App'

import 'mp-colorui/dist/style/index.scss'
import './app.scss'

import configStore from './store'

const store = configStore()

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/Index/index', // 首页
      'pages/Recipe/Lib/index', // 配方库
      'pages/Recipe/Create/index', // 新增配方
      'pages/Recipe/Info/index', // 配方详情
      'pages/Recipe/Make/index', // 使用配方
      'pages/Recipe/AddPurchase/index', // 添加采购
      'pages/PurchaseOrder/index', // 采购单
      'pages/Conversion/index', // 换算比例
      'pages/ComparePrice/index', // 价格比较
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))