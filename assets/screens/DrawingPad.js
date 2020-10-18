import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Constants, FileSystem } from 'expo';
import base64 from 'base64-js';
import ExpoPixi from 'expo-pixi'; 

export default class DrawingPad extends Component {
  constructor(props) {
    super(props);
    this.sketch = null;
  }


  render() {
    const color = "black";
    const width = 4;
    const alpha = 1;
    return (
      <View style={{ flex: 1 }}>
        <ExpoPixi.Signature
          ref={ref => (this.sketch = ref)}
          strokeColor={color}
          strokeWidth={width}
          strokeAlpha={alpha}
          style={{ flex: 1 }}
        />
        <View
          style={{
            height: 80,
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#0d52bd',
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              width: '45%',
              borderRadius: 6,
            }}>
              {/* need to add the save functionalty*/}
            <Text style={{ fontSize: 19, color: 'white' }}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
