import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import MyButton from '../myCalculator/src/components/myOperatorButtons';
export default function App() {
  const [n1, setN1] = useState('')
  const [n2, setN2] = useState('')
  const [operator, setOperator] = useState('')
  const [ans, setAns] = useState('')

  let regex = /^[0-9]+$/
function clear(){
  setOperator(prevOpe => '')

  setAns(prevAns => '')

}
  function solve(){
    if(regex.test(n1)==true && regex.test(n2)==true && operator!=''){
        if(operator=='+'){
          setAns(prevAns => parseInt(n1) + parseInt(n2))
        }
        else if(operator=='-'){
          setAns(prevAns => parseInt(n1) - parseInt(n2))
        }
        else if(operator=='*'){
          setAns(prevAns => parseInt(n1) * parseInt(n2))
        }
        else if(operator=='/'){
          setAns(prevAns => parseInt(n1) / parseInt(n2))
        }
    }
    else if (operator===''){
      Alert.alert('theres no operator!')
    }
    else{
      Alert.alert('values are incomplete!')
    }
  }


  return (
    <ScrollView style={styles.container}>
   
      <StatusBar style="auto" />
      <View style={styles.finalOutput}>
        <Text style={{textAlign:'right', fontSize: 90}}>{ans}</Text>
        
      </View>
      <View style={styles.myRow1}>
      <TextInput style={styles.myInputs}
           
            
           underlineColorAndroid='transparent'  
           
           keyboardType={'number-pad'} 
           onChangeText={n1 => setN1(n1)}

         />  
        <View style={styles.myOperator}>
  <Text style={{fontSize:70, color:'white'}}>{operator}</Text>
        </View>
        <TextInput style={styles.myInputs}
           
            
            underlineColorAndroid='transparent'  
            
            keyboardType={'number-pad'} 
            onChangeText={n2 => setN2(n2)}
          />  
        
      </View>
      <View style={styles.myRow2}>
      <MyButton Text='+' style={styles.myButtons}
       onPress={() => {
          setOperator('+');
            console.log(operator);
        }}>  </MyButton>
        <MyButton Text='-' style={styles.myButtons}
       onPress={() => {
          setOperator('-');
            console.log(operator);
        }}>  </MyButton>
        <MyButton Text='*' style={styles.myButtons}
       onPress={() => {
          setOperator('*');
            console.log(operator);
        }}>  </MyButton>
        <MyButton Text='/' style={styles.myButtons}
       onPress={() => {
          setOperator('/');
            console.log(operator);
        }}>  </MyButton>
      </View>
      <View style={styles.myRow3}>
      <TouchableOpacity style={{ backgroundColor: 'maroon', alignItems:'center', justifyContent: 'center', height: '75%', borderRadius: 20, width:'48%'}}
      
      onPress={() => {
        
        clear();
    }}
      
      >
        <Text style={{color:'white', fontSize:60}}>C</Text>
        </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: '#F58900',  alignItems:'center', justifyContent: 'center', height:'75%', borderRadius: 20, width:'48%'}}
      
      onPress={() => {
        
        solve();
    }}
      
      >
        <Text style={{color:'white', fontSize:80}}>=</Text>
        
      </TouchableOpacity>
       
      </View>
    
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#303030',
    

    marginTop: '10%',
   
  },
  myRow: {
    flex:1,

    alignItems:"center",
    justifyContent:'space-evenly',
    backgroundColor:'black',
    flexDirection: 'row',
    width: '90%'
  },
  myRow1: {
    height: 130,

    alignItems:"center",
    alignSelf: 'center',
    justifyContent:'space-between',
    backgroundColor:'#303030',
    flexDirection: 'row',
    width: '90%'
  },
  myRow2: {
    height: 120,
    backgroundColor: '#303030',

    alignItems:"center",
    alignSelf: 'center',
    justifyContent:'space-evenly',
    flexDirection: 'row',
    width: '90%'
  },
  myRow3: {
    height: 120,

    alignItems:"center",
    alignSelf: 'center',
    justifyContent:'space-between',
    backgroundColor:'#303030',
    flexDirection: 'row',
    width: '90%'
  },
  myButtons:{
    width:'20%', 
    
     alignItems:'center', 
     justifyContent: 'center',
      height: '65%',
       borderRadius: 100, 
       backgroundColor: '#F58900'
  },
  finalOutput:{flexDirection:'row',height: 150, marginTop: '15%',alignSelf:'center', justifyContent:'flex-end', backgroundColor: 'white', width: '90%'},
  myInputs:{width: '35%',textAlign: 'right', fontSize:40, backgroundColor:'white', alignItems:'flex-end', justifyContent: 'center', height: '65%'},
  myOperator:{width: '25%', backgroundColor:'#303030', alignItems:'center', justifyContent: 'center', height: '65%'},
});
