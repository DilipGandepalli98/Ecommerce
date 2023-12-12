import react,{useState} from 'react'
import { View, Text, TouchableOpacity,TextInput, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useDispatch } from 'react-redux'
import { formDetails } from '../../Service/Actions';
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const StoreInput = () =>{

    const [name,setName]=useState('')
    const [age,setAge]=useState('')
    const [city,setCity]=useState('')
    const [stateValue,setStateValue]=useState('')
    const [dataAvailable,setDataAvailable]=useState(false)
    const dispatch = useDispatch()
    const navigation = useNavigation()
    
    const submit = () => {
        const objects = {
            name:name,
            age:age,
            city,city,
            stateValue:stateValue
        }
        dispatch(formDetails(objects))
        setDataAvailable(true)
        setName('')
        setAge('')
        setCity('')
        setStateValue('')
        navigation.navigate('BottomTabNavigator')
    }
    const inputObjectData = useSelector((state)=>state.practice.formDetails)

    return(
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <View style={{height:hp(100)}}>
                <View style={{height:hp(10),justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:24,color:'grey'}}>Register</Text>
                </View>
                <View>
                    <Text style={{marginHorizontal:'5%',fontSize:16,marginVertical:'2%'}}>Enter your Details</Text>
                    <TextInput value={name} onChangeText={(name)=>setName(name)} placeholder='Enter your name' style={{marginHorizontal:'5%',borderWidth:1,marginBottom:'5%'}}/>
                    <TextInput value={age} onChangeText={(age)=>setAge(age)} placeholder='Enter your age' style={{marginHorizontal:'5%',borderWidth:1,marginBottom:'5%'}}/>
                    <TextInput value={city} onChangeText={(city)=>setCity(city)} placeholder='Enter your city' style={{marginHorizontal:'5%',borderWidth:1,marginBottom:'5%'}}/>
                    <TextInput value={stateValue} onChangeText={(age)=>setStateValue(age)} placeholder='Enter your State' style={{marginHorizontal:'5%',borderWidth:1}}/>
                </View>
                <TouchableOpacity activeOpacity={0.5} onPress={submit} style={{marginTop:'5%',backgroundColor:'navy',justifyContent:'center',alignItems:'center',marginHorizontal:'5%'}}>
                    <Text style={{marginHorizontal:'5%',fontSize:18,marginVertical:'2%',color:'white'}}>Submit</Text>
                </TouchableOpacity>
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
            </View>
            
        </TouchableWithoutFeedback>
    )
}
export default StoreInput