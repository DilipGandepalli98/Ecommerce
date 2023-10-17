import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    headingContainer:{
        flex:0.1,
        marginBottom:'1%',
        flexDirection:'row',
        backgroundColor:'#D3D3D3',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:'5%'
      },
      heading:{
        fontSize:RFPercentage(3)
      }
})

const DropdownPractice = ({title,navigation}) => {

  return (
    <TouchableOpacity onPress={navigation} activeOpacity={0.5} style={styles.headingContainer}>
        <Text style={styles.heading}>{title}</Text>
        <AntDesign name="caretright"/>
      </TouchableOpacity>
  )
}

export default DropdownPractice

