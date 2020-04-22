import Taro, { useState } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { ClButton  } from 'mp-colorui'

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
      <ClButton size='large' long onClick={incrementStateCount}>stateCount: {count}</ClButton>
      <ClButton size='large' long onClick={incrementReduxAsyncCount}>reduxAsyncCount: {reduxCount}</ClButton>
      <ClButton size='large' long onClick={incrementReduxSyncCount}>reduxSyncCount: {reduxCount}</ClButton>
    </View>
  )
}

export default Index

