/**
 * 并无实际用处，只是套壳
 */
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'

import Index from '@pages/Index'
import ComparePrice from '@pages/ComparePrice'
import Conversion from '@pages/Conversion'
import PurchaseOrder from '@pages/PurchaseOrder'
import RecipeLib from '@pages/Recipe/Lib'
import RecipeCreate from '@pages/Recipe/Create'
import RecipeInfo from '@pages/Recipe/Info'
import RecipeMake from '@pages/Recipe/Make'
import RecipeAddPurchase from '@pages/Recipe/AddPurchase'

type PageState = {
}

class AppContainer extends Component<{}, PageState> {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: 'recipe'
  }

  constructor(props) {
    super(props)
    this.state = { }
  }

  componentWillReceiveProps() { }

  componentWillUnmount() { }

  componentDidShow() {
  }

  componentDidHide() { }


  render() {
    return (
      <View> </View>
    )
  }
}

// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion

export default AppContainer
