import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { useSelector } from 'react-redux';

const Notification = () => {
  const detailsName = useSelector((state)=>(state.details.details));
  console.log(detailsName,'sss')
  return (
    <View>
      <Text>{detailsName}</Text>
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({})