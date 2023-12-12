import { StyleSheet, Text, View, TextInput,} from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

const Input = ({title,placeholder,numberonly,emailKeyboard,value,onChangeText,passwordType,error,onFocus}) => {
  return (
      <View style={{height:hp(15),justifyContent:'center'}}>
        <View style={{height:'30%',marginHorizontal:'4%'}}>
          <Text style={{color:'#000080',fontSize:16}}>{title}</Text>
        </View>
        <View style={{borderWidth:1,borderColor:'#D6D6D6',marginHorizontal:'4%',paddingLeft:'2%'}}>
            <TextInput 
              onFocus={onFocus}
              onChangeText={onChangeText}
              secureTextEntry={passwordType && true}
              value={value}
              maxLength={numberonly && 10} 
              keyboardType={numberonly ? 'numeric' : emailKeyboard ? 'email-address' : 'default'}
              placeholder={placeholder}
            />
        </View>
        { error &&
          <Text style={{marginHorizontal:'4%',fontSize:14,color:'red'}}>{error}</Text>
        }
      </View>
  )
}

export default Input

const styles = StyleSheet.create({})