import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'; 
import GlobalHeader from '../Component/GlobalHeader';
import DropdownPractice from '../Component/DropdownPractice';
import { useNavigation } from '@react-navigation/native'

const styles = StyleSheet.create({
  container:{
    flex:1
  },
})
const Practice = () => {

  const navigation = useNavigation();

  const CalculatorNavigate = () => {
    navigation.navigate("Calculator")
  }
  const starRatingNavigate = () => {
    navigation.navigate("StarRating")
  }
  return (
    <View style={styles.container}>
      <GlobalHeader title="Practice" backNav/>
      <DropdownPractice title="Calculator" navigation={CalculatorNavigate}/>
      <DropdownPractice title="Star-Rating"  navigation={starRatingNavigate} />
      <DropdownPractice title="To-do-list"  navigation={()=>navigation.navigate('ToDoList')} />
    </View>
  )
}

export default Practice

