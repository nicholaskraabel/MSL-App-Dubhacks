import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Constants, FileSystem } from 'expo';
import base64 from 'base64-js';
import ExpoPixi from 'expo-pixi'; 

export default class App extends Component {
  constructor(props) {
    super(props);
    this.sketch = null;
  }

  stringToUint8Array(str) {
    const length = str.length;
    const array = new Uint8Array(new ArrayBuffer(length));
    for (let i = 0; i < length; i++) array[i] = str.charCodeAt(i);
    return array;
  }

  async fileToBase64(uri) {
    try {
      const content = await FileSystem.readAsStringAsync(uri);
      return base64.fromByteArray(this.stringToUint8Array(content));
    } catch (e) {
      console.warn('fileToBase64()', e.message);
      return '';
    }
  }

  fileToBase64Helper(uri) {
    return this.fileToBase64(uri);
  }

  render() {
    const color = 0x000000;
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
          onChange={async () => {
            const { uri } = await this.sketch.takeSnapshotAsync({
              format: 'png',
            });
            // console.log(await this.fileToBase64Helper(uri))
            console.log(uri);
            try {
              console.log(FileSystem);
              console.log(FileSystem.EncodingTypes);
              const file = await FileSystem.readAsStringAsync(uri, {
                encoding: 'base64',
              });
              console.log(file);
            } catch (e) {
              console.error(e.message);
            }
          }}
        />
        <View
          style={{
            height: 80,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingHorizontal: 20,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              width: '45%',
              borderRadius: 6,
              borderColor: '#0d52bd',
              borderWidth: 2,
            }}>
            <Text style={{ fontSize: 19, color: 'black' }}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#0d52bd',
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              width: '45%',
              borderRadius: 6,
            }}>
            <Text style={{ fontSize: 19, color: 'white' }}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
