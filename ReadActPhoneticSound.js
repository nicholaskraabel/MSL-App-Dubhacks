import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, useState, Alert } from 'react-native';
import { Audio } from 'expo-av';
import * as Speech from 'expo-speech';
import { render } from 'react-dom';
import styles from './assets/styles/stylesheet.js'

var dataArray = ["some sentences", "this better function", "I really hope this works"];
export default class SpeechTask extends React.Component{
    constructor(props){
        super(props);
        this.state = {textArray: ["some sentences", "this better function", "I really hope this works"],
        text: "starting phrase",
        num: 0}
    }

clickHandler = (e) => {
    this.num++;
    let textUpate = textArra[this.num];
    this.setState({text: textUpdate})
}

render(){
    return(
        <View style={styles.h1}>
            <Text>{this.state.text}</Text>
            <View style={styles.button}>
                <Button style={styles.buttonText} title = "Next" onPress={()=> {console.log('press')}}/>
            </View>
        </View>
    );
}

}