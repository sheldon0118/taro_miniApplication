import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './userCenter.less'
import { AtAvatar } from 'taro-ui'
export default class UserCenter extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='wrap'>
        {/* 頭部卡片 */}
        <View className='header-card'>
          <AtAvatar
            circle
            size='large'
            image='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fc8%2Fdd%2Fb9%2Fc8ddb934a69d90216f1b406cf3975475.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630355643&t=90862f95a8ffaa608d9a1b96be72d551'>
          </AtAvatar>
          <View className='header-card-info'>
            <Text>Shledon</Text>
            <Text>持有：10积分</Text>
          </View>
        </View>
        {/* 選項 */}
        <View className='content'>
          <View className='content-item'>个人信息</View>
          <View className='content-item'>我的收藏</View>
          <View className='content-item'>我的发布</View>
          <View className='content-item'>我的资产</View>
          <View className='content-item'>退出登录</View>
        </View>
      </View>
    )
  }
}
