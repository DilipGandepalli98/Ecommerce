import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GlobalHeader from '../Component/GlobalHeader'

const WishList = () => {
  return (
    <View style={{flex:1}}>
      <GlobalHeader backNav title='WishList'/>
    </View>
  )
}

export default WishList

const styles = StyleSheet.create({})