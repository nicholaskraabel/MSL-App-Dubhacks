import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView, Alert} from 'react-native';
import {Ionicons} from '@expo/vector-icons';



export default function App() {

  const noun = () => Alert.alert("You hit a noun!");
  const verb = () => Alert.alert("You hit a verb!");
  const adjective = () => Alert.alert("You hit an adjective!");

  SampleFunction=(item)=>{
    Alert.alert(item);
  }
    return(
      <View style={styles.Container}>
        <View style = {styles.Circle} />
        <TouchableOpacity style = {styles.buttonForCircle} onPress={adjective}>
          <Text>Adjective</Text>
        </TouchableOpacity>
        <View style = {styles.Square} />
        <TouchableOpacity style = {styles.buttonForSquare} onPress={noun}>
          <Text>Noun</Text>
        </TouchableOpacity>
        <View style = {styles.Triangle} />
        <TouchableOpacity style = {styles.buttonForTriangle} onPress={verb}>
          <Text>Verb</Text>
        </TouchableOpacity>
      </View>
    )
  }
  
  

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",   
  },
  Circle: {
    width: 120,
    height: 120,
    borderRadius: 120/2,
    backgroundColor: '#ffe4e1',
    margin: 20,
    marginBottom: 100,
    alignSelf: 'flex-end'
  },
  Square: {
    width: 120,
    height: 120,
    backgroundColor: '#d8bfd8',
    margin: 20,
    marginBottom: 100,
    alignSelf: 'flex-end'
  },
  Triangle: {
    width: 0,
    height: 120,
    backgroundColor:'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 60,
    borderRightWidth: 60,
    borderBottomWidth: 115,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#ffebcd',
    margin: 20,
    marginBottom: 100,
    alignSelf: 'flex-end'
  },
  buttonForCircle: {
    position: 'absolute',
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    bottom: 135,
    left: 20,
    color: 'transparent',
    borderColor: 'transparent',
    width: 90,
    height: 40,
    padding: 10,
    borderWidth: 2,
    borderRadius: 20,
  },
  buttonForSquare: {
    position: 'absolute',
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    bottom: 135,
    left: 158,
    color: 'transparent',
    borderColor: 'transparent',
    width: 90,
    height: 40,
    padding: 10,
    borderWidth: 2,
    borderRadius: 20,
  },
  buttonForTriangle: {
    position: 'absolute',
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    bottom: 135,
    left: 295,
    color: 'transparent',
    borderColor: 'transparent',
    width: 90,
    height: 40,
    padding: 10,
    borderWidth: 2,
    borderRadius: 20,
  }
});
