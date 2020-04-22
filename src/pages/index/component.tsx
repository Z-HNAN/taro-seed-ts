import Taro, { useState } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

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
      <Button onClick={incrementStateCount}>stateCount: {count}</Button>
      <Button onClick={incrementReduxAsyncCount}>reduxAsyncCount: {reduxCount}</Button>
      <Button onClick={incrementReduxSyncCount}>reduxSyncCount: {reduxCount}</Button>
    </View>
  )
}

export default Index

