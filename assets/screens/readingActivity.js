import Style from "../styles/stylesheet"
import Card from '../components/AboutPageCard';
import React, { Component } from 'react';
import { View, ScrollView, ImageBackground, StyleSheet, Button, useState } from 'react-native';


export default class readAct extends React.Component{
        render(){
        var dataArray = ["some sentences", "this better function", "I really hope this works"];
        var num = 0;
        const [value, onChangeText] = React.useState(dataArray[num])
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
        
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#afe0ff",
        alignContent: "center",
    },
    backgroundImage:{
        width: "100%",
        height: '100%',
        flex: 1,
    },
    heading:{
        resizeMode: "cover",
        paddingTop: 100,
        alignContent: "center",
        alignItems: "center",
    },

    navigation:{
        paddingTop: 40,
        paddingLeft: 30,
        justifyContent: "flex-start",
        flexDirection: "row"
    }

});

