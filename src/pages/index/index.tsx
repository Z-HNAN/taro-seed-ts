import { ComponentClass } from 'react'
import Taro, { PureComponent, Config } from '@tarojs/taro'
import { Dispatch } from 'redux'
import { connect } from '@tarojs/redux'
import { IConnectState } from '@src/store/reducer'

import { async, sync } from './actions'

import IndexComponent from './component'

import './index.scss'

const {
  asyncAdd,
} = async

const {
  add,
} = sync


type IndexProps = { }
type IndexStateProps = {
  count: number;
}
type IndexDispatchProps = {
  onAsyncAdd: (count: number) => any;
  onSyncAdd: (count: number) => any;
}

type IProps = IndexProps & IndexStateProps & IndexDispatchProps

type IState = {
  count: number;
}

interface Index {
  props: IProps;
  state: IState;
}

const mapStateToProps = (state: IConnectState) => {
  const { count } = state.index
  return {
    count,
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    onAsyncAdd: (newCount) => {
      dispatch(asyncAdd({ count: newCount}))
    },
    onSyncAdd: (newCount) => {
      dispatch(add({ count: newCount }))
    }
  }
}

@connect(mapStateToProps, mapDispatchToProps)
class Index extends PureComponent<IProps, IState> {
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

  render () {
    const {
      count,
      onAsyncAdd,
      onSyncAdd,
    } = this.props

    return (
      <IndexComponent
        count={count}
        onAsyncAdd={onAsyncAdd}
        onSyncAdd={onSyncAdd}
      />
    )
  }
}

export default Index
