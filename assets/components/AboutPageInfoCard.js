import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Style from "../styles/stylesheet"

function AboutPageInfoCard({heading, content}){
    return(
        <View style={styles.card}>
            <View style={styles.detailsContainer}>
                <Text style={Style.h2}>{heading}</Text>
                <Text>{content}</Text>
            </View>
        </View> 
    );
}


const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: "#fff",
        marginBottom: 20,
        padding: 10,
        margin: 10,
        flexDirection:"row",
    },
    detailsContainer:{
        padding: 20,
    },
    heading:{
        fontFamily: "",
        fontWeight:"bold"
    },

});

export default AboutPageInfoCard;
  