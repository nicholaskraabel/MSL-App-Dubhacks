import React, { Component } from 'react';
import { Text } from 'react-native';
import Styles from '../styles/stylesheet'

export default class H1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
        <Text style={[Styles.h1]}> {this.props.children} </Text>
    );
  }
}
