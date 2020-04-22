import Taro, { useState } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { AtButton } from 'taro-ui'

interface IndexProps {
  onAsyncAdd: () => any;
  onNavigateTo: () => any;
}

const Index: Taro.FC<IndexProps> = (props: IndexProps) => {
  const {
    onAsyncAdd,
  } = props

  const [count, setCount] = useState(0)

  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <Button onClick={onAsyncAdd}>onAsyncAdd</Button>
      <Button onClick={() => { setCount((c) => c + 1) }}>onSyncAdd: {count}</Button>
      <AtButton>Taro-UI</AtButton>
    </View>
  )
}

export default Index

