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
  const [starRating,setStarRating] = useState(false)

  const CalculatorNavigate = () => {
    navigation.navigate("Calculator")
  }
  const rating = () => {
    setStarRating(true)
  }
  return (
    <View style={styles.container}>
      <GlobalHeader title="Practice" backNav/>
      <DropdownPractice title="Calculator" navigation={CalculatorNavigate}/>
      <DropdownPractice title="Star-Rating" rating={rating} starRating={starRating} setStarRating={setStarRating} />
    </View>
  )
}

export default Practice

