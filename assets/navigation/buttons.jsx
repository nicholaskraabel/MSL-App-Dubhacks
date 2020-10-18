import React, {Component } from 'react';
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const button = props => {
    const content = (
        <View style = {[styles.button, { backgroundColor: props.color}]}>
         <Text style={styles.text}>{props.text}</Text>
        </View>
    )
    return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
}

const styles = StyleSheet.create({

}
)

export default button