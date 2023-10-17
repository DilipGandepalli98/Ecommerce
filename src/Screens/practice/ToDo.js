import { StyleSheet, Text, View,TextInput ,TouchableOpacity, TouchableWithoutFeedback,Keyboard, FlatList} from 'react-native'
import React,{useRef} from 'react';
import GlobalHeader from '../../Component/GlobalHeader';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        flexDirection:'row',
        marginHorizontal:'5%',
        marginVertical:'5%'
    },
    InputContainer:{
        flex:0.75,
        justifyContent:'center',
        paddingLeft:5,
        borderWidth:1,
        borderRadius:5,
        borderColor:'#D3D3D3'
    },
    buttonStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:'2%',
        borderRadius:5,
        flex:0.25,
        backgroundColor:'#047BD5'
    },
    buttonText:{
        color:'#fff',
        fontSize:16,
        fontWeight:'600'
    },
    listContainer:{
        flex:1,
        marginHorizontal:'5%',
        backgroundColor:'#5A5A5A',
        margin:'1%',
        padding:'4%',
        borderRadius:5,
    },
    listText:{
        color:'#fff',
        fontWeight:'600'
    }
})

const ToDo = () => {
    const [focus,setFocus] = React.useState(false)
    const [value,setValue] = React.useState('')
    const [tasks,setTasks] = React.useState([])
    const [editIndex,setEditIndex] = React.useState(-1)
    const [error,setError] = React.useState('')

    const refInput = useRef(null);

    const handleText = (text) => {
        setValue(text)
    }

    const handleTask = () =>{
        if(value){
            if(editIndex !== -1){
                const updatedTask = [...tasks]
                updatedTask[editIndex] = value
                setTasks(updatedTask)
                setEditIndex(-1)
            }else {
                setTasks([...tasks,value])
            }
            
        }  
        setValue('')
        Keyboard.dismiss() 
    }
    const handleDelete = (index) =>{
        const updatedTask = [...tasks]
        updatedTask.splice(index,1)
        setTasks(updatedTask)
    }
    const handleEdit = (index) => {
        refInput.current.focus();
        const editIndex = tasks[index]
        setValue(editIndex)
        setEditIndex(index)
        
    }

    const renderItem = ({item,index}) => {
        return (
            <View style={styles.listContainer}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={styles.listText}>{index + 1} . </Text>
                    <Text style={styles.listText}>{item}</Text>
                    <TouchableOpacity onPress={()=>handleDelete(item,index)}  activeOpacity={0.5} style={{ position:'absolute',right:'1%'}}>
                        <MaterialIcons color='#fff' size={26} name='delete-outline'/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>handleEdit(index)} activeOpacity={0.5}    style={{ marginRight:'2%',position:'absolute',right:'10%'}}>
                        <MaterialIcons color='#fff' size={26} name='mode-edit-outline'/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
      return (
    <TouchableWithoutFeedback onPress={()=>{setValue(''),setEditIndex(-1),Keyboard.dismiss()}}>
    <View style={styles.container}>
        <GlobalHeader title="To-Do-List" backNav/>
        <View style={styles.header}>
        <View style={[styles.InputContainer,{borderColor:focus?'green':'black'}]}>
            <TextInput 
                ref={refInput}
                value={value} 
                onChangeText={(text)=>handleText(text)} 
                onFocus={()=>setFocus(true)} 
                onBlur={()=>{setFocus(false)}} 
                placeholder='Enter the list to add'
            />
        </View>
        <TouchableOpacity onPress={handleTask} style={styles.buttonStyle}>
                <Text style={styles.buttonText}>
                    { editIndex !== -1 ? 'Update':  'Add'}
                    </Text>
        </TouchableOpacity>
        
        </View>
        {/* {
            error && 
            <Text style = {{color:'red'}}>{error}</Text>
        } */}
        <FlatList
            data={tasks}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={renderItem}
        />
    </View>
    </TouchableWithoutFeedback>
  )
}

export default ToDo