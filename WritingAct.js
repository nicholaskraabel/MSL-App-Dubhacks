import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { random_sentence} from '../data/sentenceList.js';

console.log(random_sentence);
//user typing box
const UserTextInput = () => {
  const [value, onChangeText] = React.useState('Type in what you see');

  return (
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
  );
}

export default UserTextInput;
