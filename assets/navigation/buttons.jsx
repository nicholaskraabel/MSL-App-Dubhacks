import React, {Component } from 'react';
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Styles from '../styles/stylesheet';

export default function custButton({text, onPress})
{
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 14,
        paddingVertical: 14,
        paddingHorizontal: 10,
        margin: 10,
        width : 30,
        backgroundColor : '#00ff7f' 
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
})

