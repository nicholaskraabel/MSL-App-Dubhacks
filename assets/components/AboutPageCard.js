import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

function AboutPageCard({heading, content, image}){
    return(
        <View style={styles.card}>
            <Image style={styles.images} source={image}/>
            <View style={styles.detailsContainer}>
                <Text style={styles.heading}>{heading}</Text>
                <Text>{content}</Text>
            </View> 
        </View>
    );
}


const styles = StyleSheet.create({

    card:{
        borderRadius: 15,
        backgroundColor: "#fff",
        marginBottom: 20,
        padding: 10,
        margin: 10,
        flexDirection:"row",
    },
    detailsContainer:{
        padding: 20,
        flex: 0.6
    },
    heading:{
        fontFamily: "",
        fontWeight:"bold"
    },
    images:{
        width:"50%",
        height: 200,
        resizeMode: "contain",
        flex: 0.4,
        borderRadius: 100,
    }
});

export default AboutPageCard;
  