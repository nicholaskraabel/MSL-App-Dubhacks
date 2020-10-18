import Style from "../styles/stylesheet"
import Card from '../components/AboutPageCard';
import React, { Component } from 'react';
import { View, ScrollView, ImageBackground, StyleSheet } from 'react-native';


function Activity({navigation}){
    return(
        <ScrollView>
            <View style={styles.container}>
                    <View  style={styles.heading}>
                        <Text style={Style.h1}>Mission Statement</Text>
                    </View>
            </View>
        </ScrollView>
    );
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

