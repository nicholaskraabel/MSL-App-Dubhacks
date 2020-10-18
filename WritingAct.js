import { Video } from 'expo-av';
import React, { Component } from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import { random_sentence} from './assets/data/sentenceList';


//user typing box
function UserTextInput () {
    var sentences = ["please", "work", "it", "out"];
    var textDisplay = sentences[Math.floor(Math.random()*sentences.length)];

  const [value, onChangeText] = React.useState('Type in what you see');

  return (
    <View style={styles.inputbox}>
      {/* generate text  */}
      <Text>{textDisplay}</Text>
      {/* user input */}
      <TextInput
        style={{ flex: 0.5, height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  inputbox:{
      flex: 1,
      alignContent: "center",
      padding: 50,
  },
});


export default UserTextInput;
