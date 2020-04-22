import Taro, { useState } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { ClButton } from 'mp-colorui'

interface IndexProps {
  onAsyncAdd: () => any;
  onNavigateTo: () => any;
}

const Index: Taro.FC<IndexProps> = (props: IndexProps) => {
  const {
    onAsyncAdd,
    onNavigateTo,
  } = props

  const [count, setCount] = useState(0)

  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <Button onClick={onAsyncAdd}>onAsyncAdd</Button>
      <Button onClick={() => { setCount((c) => c + 1) }}>onSyncAdd: {count}</Button>
      <ClButton onClick={onNavigateTo}>Go</ClButton>
    </View>
  )
}

export default Index

