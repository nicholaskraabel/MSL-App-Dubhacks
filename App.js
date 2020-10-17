import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Audio } from 'expo-av';
import * as Speech from 'expo-speech';
import { render } from 'react-dom';


export default class elementSP extends React.Component{
    speak() {
        Speech.speak("Hi does this work hopefully");
    }
    render() {
        return(
        <View style={styles.addlater}>
            <Button title="testsound" onPress={this.speak}/>
        </View>
        );
    }
}


const styles = StyleSheet.create({
    addlater:{
        flex: 1,
        backgroundColor: '#ecf2f0'
    }

});
