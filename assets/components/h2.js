import React, { Component } from 'react';
import { Text } from 'react-native';
import Styles from '../styles/stylesheet'

export default class H2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <Text style={[Styles.h2]}>{this.props.children}</Text>
    );
  }
}
