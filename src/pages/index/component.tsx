import Taro, { useState } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'

interface IndexProps {
  count: number;
  onAsyncAdd: (count: number) => any;
  onSyncAdd: (count: number) => any;
}

const Index: Taro.FC<IndexProps> = (props: IndexProps) => {
  const {
    count: reduxCount,
    onAsyncAdd,
    onSyncAdd,
  } = props

  const [count, setCount] = useState<number>(0)

  function incrementStateCount () {
    setCount((c) => c + 1)
  }

  function incrementReduxAsyncCount () {
    onAsyncAdd(reduxCount + 1)
  }

  function incrementReduxSyncCount() {
    onSyncAdd(reduxCount + 1)
   }


  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <AtButton onClick={incrementStateCount}>stateCount: {count}</AtButton>
      <AtButton onClick={incrementReduxAsyncCount}>reduxAsyncCount: {reduxCount}</AtButton>
      <AtButton onClick={incrementReduxSyncCount}>reduxSyncCount: {reduxCount}</AtButton>
    </View>
  )
}

export default Index

