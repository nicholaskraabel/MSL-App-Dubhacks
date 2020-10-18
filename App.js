import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Home from './assets/screens/home';
import Menu from './assets/screens/menu';
export default function App() {
  return (
    <View style={{flex: 1, position: 'relative'}}>
      <Menu />
      <Home />
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
