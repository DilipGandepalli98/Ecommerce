import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View , Switch} from 'react-native'
import React,{useState,useEffect,useMemo,useRef, useCallback,useReducer} from 'react';
import GlobalHeader from '../../Component/GlobalHeader';

//for useCallback
import List from './List';


//for useContext
import FunctionalComponent from './FunctionalComponent';
export const ThemeContext = React.createContext();
const Hooks = () => {

// useState --  
//     const [state,setState] = useState({count:10,theme:'blue'})
//     const increment = () =>{
//         setState((prevState)=>({...prevState,count:prevState.count+1,theme:prevState.theme='Ganesh'}))
//     }
//     const Decrement = () =>{
//         setState((prevState)=>{
//             return(
//                 {...prevState,count:prevState.count-1,theme:prevState.theme='red'}
//             )
//         })
//     }
//   return (
//     <View style={{flex:1}}>
//         <GlobalHeader title='useState'/>
//         <Button onPress={Decrement} title="Decrement"/>
//             <Text style={{fontSize:22,alignSelf:'center'}}>{state.count}{state.theme}</Text>
//         <Button onPress={increment} title="Increment"/>
//     </View>
//   )
//   }
// --------------------------------------------------------------------------------------------

// // useEffect -- 

// const API_URL = 'https://jsonplaceholder.typicode.com/'
// const [resourceType,setResourceType] = useState('posts')
// const [data,setData]=useState([])

// useEffect(()=>{
//     const apiCall = async() =>{
//         try {
//             const response = await fetch(`${API_URL}${resourceType}?_limit=10`)
//             const result = await response.json()
//             setData(result)
//         } catch (error) {
//             console.log(error)
//         }   
//     }
//     apiCall()
// },[resourceType])

// return(
//     <View style={{flex:1}}>
//         <GlobalHeader title='useEffect'/>
//         <View style={{flexDirection:'row',flex:0.05}}>
//             <TouchableOpacity onPress={()=>setResourceType('posts')} style={{backgroundColor:resourceType==='posts'?'white':'blue',width:'33.3%',borderWidth:1,justifyContent:'center',alignItems:'center',paddingHorizontal:'5%'}}>
//                 <Text style={{color:resourceType==='posts'?'black':"white",fontWeight:'600'}}>posts</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={()=>setResourceType('users')} style={{backgroundColor:resourceType==='users'?'white':'blue',width:'33.3%',borderWidth:1,justifyContent:'center',alignItems:'center',paddingHorizontal:20}}>
//                 <Text style={{color:resourceType==='users'?'black':"white",fontWeight:'600'}}>users</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={()=>setResourceType('comments')} style={{backgroundColor:resourceType==='comments'?'white':'blue',width:'33.3%',borderWidth:1,justifyContent:'center',alignItems:'center',paddingHorizontal:20}}>
//                 <Text style={{color:resourceType==='comments'?'black':"white",fontWeight:'600'}}>comments</Text>
//             </TouchableOpacity>
//         </View>
//         <ScrollView style={{flex:1}}>
//             <Text style={{color:'black',fontWeight:'600',fontSize:26}}>{resourceType}</Text>
//             {
//                 data.map((item)=>{
//                     return(
//                         <>
//                             <Text>{JSON.stringify(item)}</Text>
//                             <View style={{height:0.5,backgroundColor:'black'}}/>
//                         </>
//                     )
//                 })
//             }
//         </ScrollView>
//     </View>
// )
// }
// --------------------------------------------------------------------------------------------
// useMemo
// const [numbers,setNumber]=useState(0)
// const [dark,setDark]=useState(true)
// const num = 9
// const doubleNumber = useMemo(()=>{
//     return slowFunction(num)
// },[numbers])
// return(
//     <View style={{flex:1}}>
//         <GlobalHeader title='useMemo'/>
//         <TextInput onChange={(num)=>setNumber(num)} value={numbers.toString()} style={{fontSize:22,fontWeight:'600',color:'black',borderWidth:1,marginHorizontal:'5%',marginTop:'5%'}} />
//         <View style={{marginHorizontal:'5%',marginTop:'5%'}}>
//             <Button onPress={()=>setNumber(prev=>prev+1)} title="Increment"/>
//         </View>
//         <View style={{marginHorizontal:'5%',marginTop:'5%'}}>
//             <Button onPress={()=>setDark(!dark)} title="ChangeTheme"/>
//         </View>
//         <View style={[{marginHorizontal:'5%',marginTop:'5%',paddingVertical:'2%',backgroundColor:dark?'black':'white',}]}>
//             <Text style={{fontSize:22,fontWeight:'600',color:dark?'white':'black'}}>{doubleNumber}</Text>
//         </View>
//     </View>
// )
// }

// function slowFunction(num){
//  console.log('slowFunction is Calling')
//  for(i=0;i<=100000000000000000000000000000000000;i++){
//      return num * 2
//  }
// }
// --------------------------------------------------------------------------------------------
// useCallback

// const [number,setNumber]=useState(1)
// const [dark,setDark]=useState(false)

// const getItems = useCallback(() => {
//     const one = 1;
//     const two = 2;
//     return [number,number+one,number+two]
// },[number])

// const backgroundTheme = {
//     backgroundColor:dark?'black':'white'
// }
// const colorTheme = {
//     color:dark?'white':'black'
// }

// return(
//     <View style={[backgroundTheme,{flex:1}]}>
//         <GlobalHeader title='useCallback'/>
//         <View style={{backgroundColor:dark?'white':'black',marginHorizontal:'5%',marginTop:'5%',}}>
//         <TextInput keyboardType='numeric' onChangeText={(num)=>setNumber(parseInt(num))} value={number.toString()} style={{fontSize:22,fontWeight:'600',color:dark?'black':'white',borderWidth:1,borderColor:dark?'white':'black'}}/>
//         </View>
//         <TouchableOpacity onPress={()=>setDark(prev=>!prev)} style={{backgroundColor:'grey',borderWidth:1,marginHorizontal:'5%',marginTop:'5%',alignItems:'center'}}>
//             <Text style={[colorTheme,{fontSize:20}]}>ToggleTheme</Text>
//         </TouchableOpacity>
//         <List getItems={getItems}/>
//     </View>
// )
// }

// --------------------------------------------------------------------------------------------
//useRef

// const [name,setName]=useState('')
// const prevName = useRef('')
// const renderCount = useRef(0)
// const inputRef = useRef()
// useEffect(()=>{
//     prevName.current = name
// },[name])
// useEffect(()=>{
//     renderCount.current=renderCount.current+1
// },[name])

// const focus=()=>{
//     inputRef.current.focus()
// }
// return(
//     <View>
//         <GlobalHeader title='useRef'/>
//         <TextInput ref={inputRef} value = {name} onChangeText={(text)=>setName(text)} style={{borderWidth:1,marginHorizontal:'5%',marginTop:'5%'}} />
//         <Text style={{fontSize:22,fontWeight:'600',color:'black'}}>{`My name is ${name} and prev name is ${prevName.current}`}</Text>
//         <Text style={{fontSize:22,fontWeight:'600',color:'black'}}>{renderCount.current}</Text>
//         <Button onPress={focus} title='Focus'/>
//     </View>
// )
// }
// --------------------------------------------------------------------------------------------
//useContext

// const [darkTheme,setDarkTheme] = useState(true)
// const toggleTheme = ()=>{
//     setDarkTheme(preTheme=>!preTheme)
// }
// const name = 'Ganesh'
// const arr = [1,2,3,4]
// const contextValue = {
//     darkTheme,
//     name,
//     arr
// }
// return(
//     <>
//     <ThemeContext.Provider value={contextValue}>
//         <GlobalHeader title='useContext'/>
//         <Button onPress={toggleTheme} title='Toggle Theme'/>
//         <FunctionalComponent/>
//     </ThemeContext.Provider>
//     </>
// )
// }

// --------------------------------------------------------------------------------------------
// useReducer
// simple useReducer
// const actions = {
//     INCREMENT : 'INCREMENT',
//     DECREMENT : 'DECREMENT',
//     THEME : 'THEME'
// }
// function reducer(state,action){
//     switch(action.type){
//         case actions.INCREMENT:
//             return {
//                 ...state,
//                 count:state.count+1
//             }
//         case actions.DECREMENT:
//             return{
//                 ...state,
//                 count:state.count-1
//             }
//         case actions.THEME:
//             return{
//                 ...state,
//                 dark:!state.dark
//             }
//         default:{
//             return state
//         }
//     }
// }
// const [state,dispatch]=useReducer(reducer,{count:0,dark:false})

// const increment=()=>{
//     dispatch({type:actions.INCREMENT})
// }

// const decrement=()=>{
//     dispatch({type:actions.DECREMENT})
// }

// const toggleTheme = ()=>{
//     dispatch({type:actions.THEME})
// }

// return(
//     <View style={{flex:1}}>
//         <GlobalHeader title='useReducer'/>
//         <TouchableOpacity onPress={increment} style={{backgroundColor:'grey',borderWidth:1,marginHorizontal:'5%',marginTop:'5%',alignItems:'center'}}>
//              <Text style={{fontSize:20,color:'white'}}>+</Text>
//         </TouchableOpacity>
//         <Text style={{fontSize:20,color:'black',fontWeight:'600',textAlign:'center'}}>{state.count}</Text>
//         <TouchableOpacity onPress={decrement} style={{backgroundColor:'grey',borderWidth:1,marginHorizontal:'5%',alignItems:'center'}}>
//              <Text style={{fontSize:20,color:'white'}}>-</Text>
//         </TouchableOpacity>
//         <Button onPress={toggleTheme} title='toggleTheme'/>
//         <View  style={{width:'20%',height:'20%',backgroundColor:state.dark?'black':'white'}}>

//         </View>
//     </View>
// )

// complex useReducer
const Actions = {
    ADD_TODO : 'Add_todo',
    TOGGLE_TODO:'Toggle_todo',
    DELETE_TODO:'Delete_Todo'
}
const initialState = {
    todoList:[]
}

function reducer(state,action){
    switch(action.type){
        case Actions.ADD_TODO:
            return{
                ...state,
                todoList:[...state.todoList,newTodo(action.payload.name)]
            }
        case Actions.TOGGLE_TODO:
            return{
                ...state,
                todoList:state.todoList.map((item)=>
                    item.id===action.payload.id ?
                    {...item,complete:!item.complete} :
                    item
                )
            }
        case Actions.DELETE_TODO:
            return{
                ...state,
                todoList:state.todoList.filter((item)=>
                    item.id!==action.payload.id
                )
            }  
        default:
            return state
    }
}
function newTodo(name){
    return {id:Date.now(),name:name,complete:false}
}

const [state,dispatch]=useReducer(reducer,initialState)
const [name,setName]=useState('')


const handleSubmit = ()=>{
    dispatch({type:Actions.ADD_TODO,payload:{name:name}})
    setName('')
}
const toggleTodo =(id)=>{
    dispatch({type:Actions.TOGGLE_TODO,payload:{id:id}})
}
const deleteTodo=(id)=>{
    dispatch({type:Actions.DELETE_TODO,payload:{id:id}})
}

return(
    <View style={{flex:1}}>
        <GlobalHeader title='useReduce'/>
        <TextInput onChangeText={(text)=>setName(text)} value={name} style={{borderWidth:1,borderColor:'black',marginHorizontal:'10%',marginTop:'5%'}} />
        <View style={{marginHorizontal:'10%',marginTop:'5%'}}>
            <Button onPress={handleSubmit}title='Submit'/>
        </View>
        <View>
            {
                state.todoList.map((item)=>{
                    return(
                        <View style={{flexDirection:'row',justifyContent:'center',marginTop:'5%'}} key={item.id}>
                            <Text style={{fontSize:24,marginRight:'2%'}}>
                                {`${item.name} - ${item.complete ? 'Complete' : 'Incomplete'}`}
                            </Text>
                            <View  style={{marginRight:'2%'}} >
                                <Button onPress={()=>toggleTodo(item.id)} title='Toggle'/>
                            </View>
                            <View  style={{marginRight:'2%'}} >
                                <Button onPress={()=>deleteTodo(item.id)} title='Delete'/>
                            </View>
                        </View>
                    )
                })
            }
        </View>
    </View>
)
}


export default Hooks