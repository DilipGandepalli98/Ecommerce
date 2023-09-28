import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';
import GlobalHeader from '../../Component/GlobalHeader';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  Calculator:{
    flex:1,
    marginHorizontal:'3%',
    marginVertical:'3%',
    borderRadius:10,
    borderWidth:2,
    borderColor:'grey'
  },
  inputContainer:{
    height:hp(10),
    marginHorizontal:'3%',
    marginTop:'3%',
    borderRadius:3,
    borderWidth:2,
    borderColor:'grey',
  },
  calnumbers:{
    flex:1,
    marginHorizontal:'3%',
    marginVertical:'3%',
    borderRadius:3,
    borderWidth:2,
    borderColor:'grey'
  }
})

const Calculator = () => {
  return (
    <View style={styles.container}>
      <GlobalHeader title="Calculator" backNav/>
      <View style={styles.Calculator}>
        <View style={styles.inputContainer}>
          
        </View>
        <View style={styles.calnumbers}>
          <TouchableOpacity>
            <Text>9</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Calculator

