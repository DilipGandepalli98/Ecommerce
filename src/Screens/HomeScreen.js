import React, {useState, useEffect} from 'react';
import { View,Text,StyleSheet, StatusBar, Button, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import HomeHeader from '../Component/HomeHeader';
import SearchProduct from '../Component/SearchProduct';
import { useDispatch } from 'react-redux';
import { detailsAction } from '../Service/Actions';
import { useNavigation} from '@react-navigation/native'
import { useSelector } from 'react-redux'

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
})


function HomeScreen () {
    const dispatch = useDispatch();
    const inputObjectData = useSelector((state)=>state.practice.formDetails)

    useEffect(()=>{
        dispatch(detailsAction('Sneha'))
    },[])

    return (
        <>
        <StatusBar
            backgroundColor='grey'
            barStyle='light-content'
            animated={true}
        />
            <HomeHeader/>
            <SearchProduct/>
            { 
                    inputObjectData.map((item,index)=>{
                        return(
                            <View key={index.toString()}>
                                <View style={{backgroundColor:'grey',marginBottom:'1%'}}>
                                    <Text>{`Name : ${item.name}`}</Text>
                                    <Text>{`Age : ${item.age}`}</Text>
                                    <Text>{`City : ${item.city}`}</Text>
                                    <Text>{`State : ${item.stateValue}`}</Text>
                                </View>
                            </View>
                        )
                    })
                }
        </>
    )
}

export default HomeScreen;