import React,{useState} from 'react';
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Feather from 'react-native-vector-icons/Feather'

const styles = StyleSheet.create({
    container:{
        flex:0.1,
        backgroundColor:'#047BD5'
    },
    content:{
        flex:1,
        flexDirection:'row'
    },
    IconContainerL:{
        flex:0.15,
        justifyContent:'center',
        alignItems:'center'
    },
    Icon:{
        fontSize:RFPercentage(3)
    },
    titleContainer:{
        flex:0.6,
        justifyContent:'center'
    },
    IconContainerR:{
        flex:0.25,
    },
    title:{
        color:'#fff',
        fontSize:RFPercentage(3)
    }
})

const GlobalHeader = ({title,backNav}) => {

    const [container2, setContainer2] = useState(false)

    const Navigation = useNavigation();

    const backNavi = () =>{
        Navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                { backNav && 
                    <TouchableOpacity style={styles.IconContainerL} onPress={backNavi}>
                        <Feather name="arrow-left" size={26} color="#fff" style={styles.Icon}/>
                    </TouchableOpacity>
                }   
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                { container2 && 
                    <View style={styles.IconContainerR}>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                }
            </View>
        </View>
    )
}
export default React.memo(GlobalHeader);