import { StyleSheet, Text, View,Keyboard,TouchableWithoutFeedback,TouchableOpacity,ScrollView, Alert, TextInput } from 'react-native'
import React,{useEffect,useState} from 'react'
import Input from '../Component/Input'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import auth from '@react-native-firebase/auth'

const Registration = ({navigation}) => {

  const [formData,setFormData]=useState({
    name:'',
    phoneNumber:'',
    email:'',
    password:'',
    Cpassword:'',
  })
  const [errors,setErrors]=useState({}) 
  
  const signUpDemo = () => {
    auth().createUserWithEmailAndPassword("sr.ganesh96@gmail.com","1234")
    .then(()=>{
      Alert.alert('account created successfully')}
    ).catch((err)=>console.log(err))
  }

  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      <>
      <ScrollView style={{height:hp(100)}}>
        <View style={{height:hp(10),justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:22,fontWeight:600,color:'#000080'}}>Registration Screen</Text>
        </View>
        <View style={{height:hp(75)}}>
          <Input
            value={formData.email}  
            emailKeyboard={true} 
            title='Email Id' 
            placeholder='Enter your Email Id'
            error={errors.email}
          />
          <Input passwordType={true} onChangeText={(text)=>handleOnChange(text,'password')} value={formData.password} emailKeyboard={true} title='Password' placeholder='Enter your password'/>
          <Input passwordType={true} onChangeText={(text)=>handleOnChange(text,'Cpassword')} value={formData.Cpassword} emailKeyboard={true} title='Confirm Password' placeholder='Enter your password again'/>
          <TextInput placeholder='summa'/>
        </View>
      </ScrollView>
      <View style={{height:hp(10),justifyContent:'center'}}>
            <TouchableOpacity onPress={signUpDemo} activeOpacity={0.5} style={{backgroundColor:'#000080',marginHorizontal:'4%',height:hp(7),justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontSize:20,color:'#fff',fontWeight:'600'}}>Register</Text>
            </TouchableOpacity>
      </View>
      </>
    </TouchableWithoutFeedback>
  )
}

export default Registration

const styles = StyleSheet.create({})