import React, { Component } from 'react';
import { View, ScrollView, Button } from 'react-native';
import H2 from '../components/h2';
import GameCard from '../components/gameCard'

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{paddingLeft: 20, paddingTop: 10, borderTopLeftRadius: 28, borderTopRightRadius: 28}}>
			<ScrollView style={{marginTop: 30, backgroundColor: '#FFFFFF'}}>
				<H2>Writing</H2>
				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginBottom: 75, marginTop: 10}}>
					<GameCard title="Copy the sentence" color="#AFE0FF">
						Copy or write over a sentence  while it is being read out.
					</GameCard>
					<GameCard title="Draw the sentence" color="#EDE398">
						Read a block of sentence and draw or write it!
					</GameCard>
				</ScrollView>

				<H2>Reading</H2>
				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginBottom: 75, marginTop: 10}}>
					<GameCard title="Title" color="#ED98B5">
						Short Description
					</GameCard>
					<GameCard title="Title" color="#98EDDA">
						Short Description
					</GameCard>
				</ScrollView>
			</ScrollView>
        </View>
    );
  }
}
