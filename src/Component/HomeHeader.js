import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from 'react-native'
import React from 'react';
import { RFPercentage } from 'react-native-responsive-fontsize';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#FFDF00',
        height:hp(10),
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'#D3D3D3',
    },
    headerImage:{
        flex:0.15,
        height:'100%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width:'70%',
        height:'70%',
    },
    headerTextContainer:{
        flex:0.65,
        justifyContent:'center',
        marginLeft:'2%'
    },
    textLine1:{
        fontSize:RFPercentage(2),
        color:'#454545'
    },
    textLine2:{
        fontSize:RFPercentage(2),
        color:'#454545',
        fontWeight:'700'
    },
    headerRight:{
        flex:0.20,
        flexDirection:'row',
        alignItems:'center'
    },
    iconContainer:{
        padding:'8%',
    },
    
})
const HomeHeader = () => {

    const navigation = useNavigation();

    const notification = () => {
        navigation.navigate("Notification")
    }
    const cart = () => {
        navigation.navigate("CartScreen")
    }
  return (
    <TouchableWithoutFeedback>
        <View style={styles.header}>
            <View style={styles.headerImage}>
                <Image source={require('../../assets/Logo/Logo.png')} style={styles.image}/>
            </View>
            <View style={styles.headerTextContainer}>
                <Text style={styles.textLine1}>Hello,</Text>
                <Text style={styles.textLine2}>Let's Shop!</Text>
            </View>
            <View style={styles.headerRight}>
                <TouchableOpacity onPress={notification} activeOpacity={0.5}  style={styles.iconContainer}>
                    <FontAwesome name="bell-o" size={22}/>
                </TouchableOpacity> 
                <TouchableOpacity onPress={cart} activeOpacity={0.5} style={styles.iconContainer}>
                    <Feather name="shopping-cart" size={22}/>
                </TouchableOpacity>    
            </View>
        </View>
    </TouchableWithoutFeedback>
  )
}

export default HomeHeader;