import React,{useState} from 'react';
import {View, Text, Pressable, StyleSheet,Button } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'##fff'
    },
    titleContainer:{
        flex:0.3,
        backgroundColor:'##F0FFF5',
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        color:'#047BD5',
        fontSize:RFPercentage(5),
        fontWeight:'600'
    }
})

const LoginScreen = ({navigation}) => {

    const [state,setState]=useState({count:10,theme:'blue'})
    const count = state.count
    const theme = state.theme

    const decrement = ()=>{
        setState((prevState) => ({...prevState,count:prevState.count-1}))
        
    }
    console.log(count)
    const increment = ()=>{
        console.log('ii')
    }

    const initialValue = (function () {
        return 'hello'
      })();

    return (
        <View style={styles.container}>
            <Button onPress={decrement} title='-'/>
            <Text style={{textAlign:'center',fontSize:22}}>{count}</Text>
            <Text style={{textAlign:'center',fontSize:22}}>{theme}</Text>
            <Button onPress={increment} title='+'/>
            <Text>{initialValue}</Text>
        </View>
    )
}
export default LoginScreen