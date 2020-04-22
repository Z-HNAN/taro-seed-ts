import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { ClButton } from 'mp-colorui'
import { Dispatch } from 'redux'
import { connect } from '@tarojs/redux'
import { IConnectState } from '@src/store/reducer'
import './index.scss'

type IndexProps = {

}
type IndexStateProps = {
  connectState: any
}
type IndexDispatchProps = {
  onAsyncAdd: () => any
}

type IProps = IndexProps & IndexStateProps & IndexDispatchProps

type IState = {
  count: number
}

interface Index {
  props: IProps;
  state: IState;
}

const mapStateToProps = (state: IConnectState) => {
  return {
    connectState: state.recipe
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    onAsyncAdd: () => {
      dispatch({ type: 'a', payload: 'aa' })
    }
  }
}

@connect(mapStateToProps, mapDispatchToProps)
class Index extends Component<IProps, IState> {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  asynAdd () {
    this.setState({
      count: this.state.count + 1
    })
  }

  navigate () {
    Taro.navigateTo({ url: '/pages/ComparePrice/index' }).then(() => {
      console.log('navigated!!!');
    })
  }

  render () {
    const {
      onAsyncAdd,
    } = this.props

    const {
      count
    } = this.state

    console.log(this.props)

    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Button onClick={onAsyncAdd}>onAsyncAdd</Button>
        <Button onClick={this.asynAdd}>onSyncAdd: {count}</Button>
        <ClButton onClick={this.navigate}>Go</ClButton>
      </View>
    )
  }
}

export default Index
