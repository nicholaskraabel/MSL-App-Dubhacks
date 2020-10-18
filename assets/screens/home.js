import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import H1 from '../components/h1';
import Styles from '../styles/stylesheet';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{flex: 1, paddingTop: 80, alignItems: 'center', position: 'relative', backgroundColor: '#AFE0FF'}}>
            <H1>Hey there,{'\n'}Let's start learning!</H1>
            <View style={{marginTop: 50}}>
                <Image style={[Styles.image]} source={require('../img/greet.png')}/>
            </View>
        </View>
    );
  }
}
