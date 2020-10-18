import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, useState, Alert } from 'react-native';
import { Audio } from 'expo-av';
import * as Speech from 'expo-speech';
import { render } from 'react-dom';

var dataArray = ["some sentences", "this better function", "I really hope this works"];
var num = 0;
function SpeechTask(){

    const [value, onChangeText] = React.useState(dataArray[num]);

    return(
        <View style={styles.container}>
            <Text>{value}</Text>
            <View style={styles.button}>
                <Button style={styles.buttonText} title = "Next" onPress={value=> {onChangeText(dataArray[num]);  num++; if(num > 2){
                    num =0;
                }}}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
       
        alignContent: "center",
        padding: 50,
    },
  
  });

export default SpeechTask;
