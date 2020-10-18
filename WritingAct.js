import { Video } from 'expo-av';
import React, { Component } from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';




    //function to randomly generate the sentece
// function random_sentence(sentences) {
//     return sentences[Math.floor(Math.random()*sentences.length)];
// }

// var textDisplay = (random_sentence(sentences));
// <View><Text>textDisplay</Text></View>


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
      {/* button */}
    </View>
    
  );
}


const styles = StyleSheet.create({
  inputbox:{
      flex: 1,
      alignContent: "center",
      padding: 50,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});


export default UserTextInput;
