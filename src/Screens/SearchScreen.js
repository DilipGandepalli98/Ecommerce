import { StyleSheet, Text, View, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import React,{useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container:{
        height:hp(12),
        backgroundColor:'#FFDF00',
        justifyContent:'center',
        alignItems:'center'
    },
    inputContainer:{
        height:hp(7),
        flexDirection:'row',
        backgroundColor:'#fff',
        marginHorizontal:'4%',
        borderRadius:5,
        borderColor:'#D3D3D3',
        borderWidth:1,
        alignItems:'center',
    },
    input:{
        paddingLeft:'2%',
    },
    searchIcon:{
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        width:'10%',
    },
    inputBox:{
        width:'70%',
        height:'100%',
        justifyContent:'center',
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
    },
    Icon:{
        fontSize:RFPercentage(3)
    },
})

const SearchScreen = ({route}) => {
    const data = route.params.data
    const navigation = useNavigation();
    const [searchRes,setSearchRes] = useState('')
    const [searchData,setSearchData ] = useState(data)
    const [searchView,setSearchView] = useState(false)

    const backNav = () => {
        navigation.goBack()
    }
    const handleOnChange = (text) => {
        setSearchRes(text)
        const filterData = data.products.filter((item)=>{
                return item.title.toLowerCase().includes(searchRes.toLowerCase())
        })
        setSearchData(filterData)
        if(text.length >= 2){
            setSearchView(true)
        }else{
            setSearchView(false)
        }
    }

    const handlesuggestion = (text) => {
        const search = [...searchData]
        const result = search.filter((item)=>{
            return (
                item.title.toLowerCase().includes(text.toLowerCase())
            )
        })
        setSearchRes(text)
        setSearchData(result)
    }
  return (
    <View style={{backgroundColor:'white'}}>
    <View style={styles.container}>
        <View style={styles.inputContainer}>
            <TouchableOpacity style={styles.searchIcon} onPress={backNav}>
                <Feather name="arrow-left" size={30} color="#000" style={styles.Icon}/> 
            </TouchableOpacity>
            <View style={styles.inputBox}>
                <TextInput value={searchRes} onChangeText={(text)=>(handleOnChange(text))} autoFocus selectionColor={"#FFDF00"} style={styles.input} placeholder='Search Products'/>
            </View>
            <View style={styles.inputRight}>
                <FontAwesome color="#454545" name="camera" size={20} style={styles.rightIcons1} />
                <FontAwesome onPress={()=>setSearchRes('')} color="#454545" name="close" size={20} style={styles.rightIcons2} />
            </View> 
        </View>
    </View>
    {
        searchView && 
        searchData?.map((item,index)=>{
            return (
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={{flex:0.85,flexDirection:'row',marginHorizontal:'4%',backgroundColor:'white',marginVertical:'1%',paddingVertical:'2%'}} key={index}>
                        <Feather style={{marginRight:'5%'}} color={'grey'} size={18} name='search'/>
                        <Text style={{color:'black'}}>{item?.title}</Text> 
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>handlesuggestion(item.title)} style={{flex:0.15,justifyContent:'center',alignItems:'center'}}>
                        <Feather color={'grey'} size={22} name='arrow-up-left' />
                    </TouchableOpacity>
                </View>
            )
        })
    }
    </View>
  )
}

export default SearchScreen

