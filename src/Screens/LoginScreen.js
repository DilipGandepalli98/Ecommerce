import React from 'react';
import {View, Text, Pressable, StyleSheet } from 'react-native';
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
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Login screen</Text>
            </View>
            <Pressable onPress={()=>navigation.navigate("Register")}>
                <Text>Register</Text>
            </Pressable>
        </View>
    )
}
export default LoginScreen