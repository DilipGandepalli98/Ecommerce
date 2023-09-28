import React,{useState} from 'react';
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Feather from 'react-native-vector-icons/Feather'
import { heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container:{
        height:hp(10),
        backgroundColor:'#FFDF00'
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
        flex:0.65,
        justifyContent:'center'
    },
    titleWithoutbackNav:{
        flex:1,
        justifyContent:'center',
        marginLeft:'5%'
    },
    IconContainerR:{
        flex:0.20,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        color:'#000',
        fontSize:RFPercentage(3)
    }
})

const GlobalHeader = ({title,backNav,rightComp}) => {

    const Navigation = useNavigation();

    const backNavi = () =>{
        Navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                { backNav && 
                    <TouchableOpacity style={styles.IconContainerL} onPress={backNavi}>
                        <Feather name="arrow-left" size={30} color="#000" style={styles.Icon}/>
                    </TouchableOpacity>
                }   
                <View style={!backNav ? styles.titleWithoutbackNav : styles.titleContainer}>
                        <Text style={[styles.title]}>{title}</Text>
                </View>
                { rightComp && 
                    <TouchableOpacity style={styles.IconContainerR} onPress={rightComp}>
                        <Feather name="shopping-cart" size={30} color="#000" style={styles.Icon}/>
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}
export default React.memo(GlobalHeader);