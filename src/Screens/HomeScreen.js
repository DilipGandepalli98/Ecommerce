import React, {useState, useEffect} from 'react';
import { View,Text,StyleSheet, StatusBar, Button, FlatList } from 'react-native';
import HomeHeader from '../Component/HomeHeader';
import SearchProduct from '../Component/SearchProduct';
import { useDispatch } from 'react-redux';
import { detailsAction } from '../Service/Actions';
import axios from 'axios';

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
})

function HomeScreen () {

    const [datas, setDatas] = useState([])
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(detailsAction('Sneha'))
    },[])

    useEffect(()=>{
        axios({
            method:'GET',
            url:'https://dummyjson.com/products',
            headers:{
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }
        }).then((response)=>{
            setDatas(response.data.products)
        })
    },[])

    const renderItem = (item,index) => {
        return (
        <View style={{flex:1,marginHorizontal:'4%',marginVertical:'2%'}}>
            <Text>{item.item.title}</Text>
        </View>
        )
    }
    return (
        <>
        <StatusBar
            backgroundColor='grey'
            barStyle='light-content'
            animated={true}
        />
            <HomeHeader/>
            <SearchProduct data={datas}/>
            <View style = {{flex:1}}>
            <FlatList
                data={datas}
                keyExtractor={(item,index)=>index.toString()}
                renderItem={renderItem}
            />
            </View>
        </>
    )
}

export default HomeScreen;