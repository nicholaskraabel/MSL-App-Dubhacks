import React, { Component } from 'react';
import { Text } from 'react-native';
import Styles from '../styles/stylesheet'

export default class H3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Text style={[Styles.h3]}>{this.props.children}</Text>
    );
  }
}
