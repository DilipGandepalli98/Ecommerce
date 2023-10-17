import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';
import GlobalHeader from '../../Component/GlobalHeader';
import Entypo from 'react-native-vector-icons/Entypo'

const StarRating = () => {
  const [starCount,setStarCount]=React.useState(0)
  
  const starFunction= (val)=>{
    
    setStarCount(val)
  }
  return (
    <>
      <GlobalHeader title="Star Rating" backNav/>
      <View style ={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <View style={{marginBottom:10}}>
          <Text style={{fontSize:20}}>Star Rating : {starCount}</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          {
            [1,2,3,4,5].map((item,index) => {
              return (
                  <TouchableOpacity onPress={()=>starFunction(index+1)} key={index} style={{padding:'5%',marginLeft:'2%'}}>
                    {
                    starCount <= index ?
                      <Entypo size={25} color='grey' name="star-outlined"/>
                      :
                      <Entypo size={25} color='gold' name="star"/>
                    }
                  </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
    </>
  )
}

export default StarRating

const styles = StyleSheet.create({})