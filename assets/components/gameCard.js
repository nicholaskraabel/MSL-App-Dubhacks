import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import Styles from '../styles/stylesheet';
import H2 from './h2';

export default class GameCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      let color = this.props.color;
      let url = this.props.url;
    return (
      <View style={[Styles.card, {backgroundColor: color}]}>
        <H2>{this.props.title}</H2>
        <View style={{ alignItems: 'center'}}>
            <Image style={{width: 200, height: 200,}} source={require("../img/clip-writer.png")}/>
        </View>
        <View style={[Styles.subCard, {borderColor: color}]}>
            <Text>{this.props.children}</Text>
        </View>
      </View>
    );
  }
}
