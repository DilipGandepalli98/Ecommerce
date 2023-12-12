import React,{useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


const styles = StyleSheet.create({
    container:{
        height:hp(7),
        flexDirection:'row',
        backgroundColor:'#fff',
        marginHorizontal:'3%',
        marginVertical:'3%',
        borderRadius:2,
        borderColor:'#D3D3D3',
        borderWidth:1,
        alignItems:'center',
        opacity:0.8
    },
    searchIcon:{
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        width:'10%',
    },
    placeholder:{
        width:'70%',
        height:'100%',
        justifyContent:'center',
    },
    placeholderText:{
        color:'#454545'
    },
    inputRight:{
        flexDirection:'row',
        width:'20%',
        height:'100%',
        alignItems:'center',
    },
    rightIcons1:{
        marginRight:'10%'
    },
    rightIcons2:{
        marginLeft:'15%'
    }
    
    
})

const SearchProduct = ({data}) => {

    const navigation =  useNavigation();
    const search = () =>{
        navigation.navigate('SearchScreen',{
            data:data
        })
    }

    return (
            <TouchableOpacity activeOpacity={0.7} style={styles.container} onPress={search}>
                <View style={styles.searchIcon}>
                    <AntDesign color="#454545" name="search1" size={20}/>  
                </View>
                <View style={styles.placeholder} >
                    <Text style={styles.placeholderText}>Search Products</Text>
                </View>
                <View style={styles.inputRight}>
                    <FontAwesome color="#454545" name="camera" size={20} style={styles.rightIcons1} />
                    <FontAwesome color="#454545" name="microphone" size={20} style={styles.rightIcons2} />
                </View>
            </TouchableOpacity>
    )
}
export default SearchProduct;