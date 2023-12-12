import { StyleSheet, Text, View } from 'react-native'
import React,{useContext} from 'react'
import {ThemeContext} from './Hooks'

const FunctionalComponent = () => {
// Without consumer 
//     const {darkTheme,name,arr} = useContext(ThemeContext)

//   return (
//     <View style={{marginTop:'10%',marginLeft:'10%',backgroundColor:darkTheme?'white':'black'}}>
//       <Text style={{color:darkTheme?'black':'white',fontSize:25}}>FunctionalComponent</Text>
//       <Text>{name}</Text>
//       {
//         arr.map((item)=>{
//             return(
//                 <Text>{item}</Text>
//             )
                
//         })
//       }
//     </View>
//   )

// with consumer
return(
    <ThemeContext.Consumer>
        {
            value=>{
                return(
                    <> 
                        {
                            value.arr.map((item)=>{
                                return(
                                    <>
                                        <Text>{item}</Text>
                                    </>
                                )
                            })
                        }
                    </>
                )
            }
        }
    </ThemeContext.Consumer>
)
}

export default FunctionalComponent

const styles = StyleSheet.create({})