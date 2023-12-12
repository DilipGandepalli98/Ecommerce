import { StyleSheet, Text, View } from 'react-native';
import React,{useState,useEffect} from 'react';

const List = ({getItems}) => {
    

    const [list,setList]=useState([])

    useEffect(()=>{
        setList(getItems())
        console.log('Ganesh')
    },[getItems])

  return (
    <View style={{marginHorizontal:'5%',marginTop:'5%'}}>
      {
        list.map((item,index)=>{
            return(
                <>
                    <Text key={index.toString()} style={[{fontSize:24,color:'pink'}]}>{item}</Text>
                </>
            )
        })
      }
    </View>
  )
}

export default List

const styles = StyleSheet.create({})