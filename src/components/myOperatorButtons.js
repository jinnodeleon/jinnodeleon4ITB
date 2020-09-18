import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';

const MyButton= (props) => {
    
    return (

        <TouchableOpacity
          
        onPress={props.onPress}
        style={styles.myButtons}
          
          >
          <Text style={{color:'white', fontSize:50}}>{props.Text}</Text>
         
          
        </TouchableOpacity>
    
    );
  };

  const styles = StyleSheet.create({
    myButtons:{
        width:'20%', 
        
         alignItems:'center', 
         justifyContent: 'center',
          height: '65%',
           borderRadius: 100, 
           backgroundColor: '#F58900'
      },
  });

  export default MyButton;