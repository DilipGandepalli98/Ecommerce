import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity, StatusBar } from 'react-native';
import HomeHeader from '../Component/HomeHeader';
import SearchProduct from '../Component/SearchProduct';

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
})

function HomeScreen () {
    return (
        <>
        <StatusBar
            backgroundColor='#000'
            barStyle='light-content'
            animated={true}
        />
            <HomeHeader/>
            <SearchProduct/>
        </>
    )
}

export default HomeScreen;