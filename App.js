import React from 'react';
import { StyleSheet, View } from 'react-native';
import Menu from './assets/screens/menu';

export default function App() {
  return (
    <View style={styles.container}>
      <Menu></Menu>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AFE0FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
