import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native'
import React, { useState } from 'react';
import GlobalHeader from '../../Component/GlobalHeader';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons'//backspace-outline

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  Calculator:{
    flex:1,
    marginHorizontal:'3%',
    marginVertical:'3%',
    borderRadius:10,
    borderWidth:2,
    borderColor:'grey'
  },
  inputContainer:{
    justifyContent:'flex-end',
    alignItems:'flex-end',
    padding:10,
    backgroundColor:'#D3D3D3',
    height:hp(11),
    marginHorizontal:'3%',
    marginTop:'3%',
    borderColor:'grey',
  },
  calnumbers:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  numberstop:{
    backgroundColor:'#5A5A5A',
    justifyContent:'center',
    alignItems:'center',
    width:'23%',
    marginRight:5,
    marginTop:'1%',
    height:90,
  },
  numberstop2:{
    backgroundColor:'#D3D3D3',
    justifyContent:'center',
    alignItems:'center',
    width:'23%',
    marginRight:5,
    marginTop:'1%',
    height:90,
  },
  calText:{
    color:'#D3D3D3',
    fontSize:RFPercentage(3),
    fontWeight:'600'
  },
  calText2:{
    color:'#5A5A5A',
    fontSize:RFPercentage(3),
    fontWeight:'600'
  },
  displatyText:{
    color:'#5A5A5A',
    fontSize:RFPercentage(3.5),
    fontWeight:'600'
  }
})

const Calculator = () => {

  const [displayValue, setDisplayValue] = useState("0");
  const [operator, setOperator] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);

  const isOperator = (value) => {
    return value === "+" || value === "-" || value === "*" || value === "/";
  };

  const handleButtonClick = (value) => {
    if (value === "=") {
      // Perform the calculation
      const result = calculate(operator, previousValue, displayValue);
      setDisplayValue(result);
    } else if (value === "C") {
      // Clear the calculator
      setDisplayValue("0");
      setOperator(null);
      setPreviousValue(null);
    } else if (isOperator(value)) {
      // Set the operator
      setOperator(value);
      if (previousValue !== null) {
        // Perform the calculation and update the previous value
        const result = calculate(operator, previousValue, displayValue);
        setPreviousValue(result);
        setDisplayValue("0");
      }
    } else {
      // Append the value to the display value
      setDisplayValue((displayValue) => displayValue + value);
    }
  };

  const calculate = (operator, previousValue, currentValue) => {
    switch (operator) {
      case "+":
        return previousValue + currentValue;
      case "-":
        return previousValue - currentValue;
      case "*":
        return previousValue * currentValue;
      case "/":
        return previousValue / currentValue;
      default:
        return previousValue;
    }
  };

  const numbers = [
    ['AC','B','C','/'],
    ['7','8','9','X'],
    ['4','5','6','-'],
    ['1','2','3','+'],
    ['%','0','.','=']
  ]
  return (
    <View style={styles.container}>
      <GlobalHeader title="Calculator" backNav/>
      <View style={styles.Calculator}>
        <View style={styles.inputContainer}>
          <Text style={styles.displatyText}>{displayValue}</Text>
        </View>
        <View style={styles.calnumbers}>
          {
            numbers.slice(0,1).map((item1,index)=>{
                return (
                  <View style={{flexDirection:'row'}} key={index} >
                    {
                      item1.map((item2, index)=>{
                        return (
                          <TouchableOpacity onPress={()=>handleButtonClick()} key={index} activeOpacity={0.5} style={[styles.numberstop]}>
                            <Text style={styles.calText}>{item2}</Text>
                          </TouchableOpacity>
                        )
                      })
                    }
                  </View>
                )
            })
          }
          {
            numbers.slice(1,5).map((item1,index)=>{
                return (
                  <>
                      <View style={{flexDirection:'row'}} key={index} >
                      {
                        item1.slice(0,3).map((item2, index)=> {
                          return (
                            <>
                            { 
                              <TouchableOpacity onPress={()=>handleButtonClick()} key={index} activeOpacity={0.5} style={styles.numberstop2}>
                                <Text style={styles.calText2}>{item2}</Text>
                              </TouchableOpacity>
                            }
                            </>
                          )
                        })
                      }
                      {
                        item1.slice(3).map((item2, index)=> {
                          return (
                            <>
                            { 
                              <TouchableOpacity onPress={()=>handleButtonClick()} key={index} activeOpacity={0.5} style={styles.numberstop}>
                                <Text style={styles.calText}>{item2}</Text>
                              </TouchableOpacity>
                            }
                            </>
                          )
                        })
                      }
                    </View>
                  </>
                  
                )
            })
          }
        </View>
      </View>
    </View>
  )
}

export default Calculator

