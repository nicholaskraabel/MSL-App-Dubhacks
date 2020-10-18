import React from 'react';
import { StyleSheet, View , Text,} from 'react-native';
import Menu from './assets/screens/menu';
import AboutPage from "./assets/screens/AboutPage";

import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./assets/navigation/navigationTheme";
import AppNavigator from "./assets/navigation/AppNavigator";

import ReadAct from './ReadActPhoneticSound';

import Writing from './WritingAct';
export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#afe0ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
