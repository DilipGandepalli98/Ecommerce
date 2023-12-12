import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize'
import AntDesign from 'react-native-vector-icons/AntDesign'

const ProductListDetails = ({productData}) => {

    const [heart,setHeart]=useState(false)
    

    const data = productData.item
    const discountedPrice = (data.discountPercentage/100 * data.price).toFixed() * 80
  return (
    
                <View style={{backgroundColor:'white', borderBottomWidth:1,borderBottomColor:'#D6D6D6',paddingVertical:'3%',paddingHorizontal:'2%'}}>
                <View style={{flexDirection:'row'}}>
                <View style={{backgroundColor:'#fff',width:100,height:100,justifyContent:'center',borderWidth:1,alignItems:'center',borderColor:'#D6D6D6'}}>
                    <Image style={{width:80,height:80,resizeMode:'stretch'}} source={{uri:data.thumbnail}}/>
                </View>
                <View style={{flex:0.85,paddingLeft:'3%'}}>
                    <Text style={{fontSize:RFPercentage(2.5),color:'black'}}>{data.title}</Text>
                    <Text style={{fontSize:RFPercentage(2),color:'black',marginTop:'2%'}}>{`Star-Rating - ${data.rating} - rating`}</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:RFPercentage(2.5),color:'green',fontWeight:'800',marginTop:'2%',marginRight:'2%'}}>{`${data.discountPercentage} off`}</Text>
                        <Text style={{fontSize:RFPercentage(2.5),color:'grey',fontWeight:'600',textDecorationLine:'line-through',marginTop:'2%',marginRight:'3%'}}>{`₹${data.price * 80}`}</Text>
                        <Text style={{fontSize:RFPercentage(2.5),color:'black',fontWeight:'600',marginTop:'2%'}}>{`₹${data.price * 80 - discountedPrice}`}</Text>
                    </View>
                </View>
                <View style={{flex:0.15}}>
                    <TouchableOpacity onPress={()=>setHeart(!heart)}>
                        { heart ?
                            <AntDesign color='red' name="heart" size={22}/>
                            :
                            <AntDesign name="hearto" size={22}/>
                        }   
                    </TouchableOpacity>
                </View>
                </View>
            </View>
  )
}

export default ProductListDetails

const styles = StyleSheet.create({})