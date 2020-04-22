import Taro, { PureComponent, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

class AddPurchase extends PureComponent {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '添加采购单'
  }

  render() {
    return (
      <View className='index'>
        <Text>AddPurchase</Text>
      </View>
    )
  }
}

export default AddPurchase