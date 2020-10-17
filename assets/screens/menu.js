import React, { Component } from 'react';
import { View, Text } from 'react-native';
import H1 from '../components/h1';
import h1 from '../components/h1';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <H1>Hey Jeff, Let's start learning!</H1>
      </View>
    );
  }
}
