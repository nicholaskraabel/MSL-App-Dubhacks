import { Video } from 'expo-av';
import React, { Component } from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import { random_sentence} from './assets/data/sentenceList';

console.log(random_sentence);
//user typing box
function UserTextInput () {
  const [value, onChangeText] = React.useState('Type in what you see');

  return (
    <View style={styles.container}>
      <TextInput
        style={{ flex: 0.5, height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
      <Text>{value}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
      flex: 1,
     
      alignContent: "center",
      padding: 50,
  },

});


export default UserTextInput;
