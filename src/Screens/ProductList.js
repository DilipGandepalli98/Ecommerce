import { StyleSheet, Text, View,FlatList,ActivityIndicator } from 'react-native'
import React,{useState,useEffect} from 'react'
import GlobalHeader from '../Component/GlobalHeader'
import ProductListDetails from './ProductListDetails'

const ProductList = ({route}) => {

    const itemList = route?.params?.item
    const data = route?.params?.data
    const [productsData,setProductsData] = useState([])
    const [loader,setLoader] = useState(true)

    useEffect(()=>{
        const filterData = data.products.filter((item)=>{
            return item.category.toLowerCase().includes(itemList.item.toLowerCase())
        })
        setProductsData(filterData)
    },[])

    

    useEffect(()=>{
        const activeIndicator = setTimeout(()=>{
            setLoader(false)
        },1000)
        return () =>{
            clearTimeout(activeIndicator)
        } 
    },[])
    
   
  return (
    <View style={{flex:1}}>
      <GlobalHeader backNav title={itemList.item} heart/>
      {
        loader ? 
        <>
        <ActivityIndicator style={{marginTop:'50%'}} size="large" color="green"/>
        <Text style={{textAlign:'center',marginTop:'1%'}}>Loading...</Text>
        </>
        :
        <FlatList
        data={productsData}
        keyExtractor={(item,index)=>index.toString()}
        renderItem={(item)=>{
            return(
                <>
                    <ProductListDetails productData={item} />
                    </>
            )
        }}
      />
      }
      
    </View>
  )
}

export default ProductList

const styles = StyleSheet.create({})