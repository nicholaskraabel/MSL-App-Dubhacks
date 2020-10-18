import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


import Menu from "../screens/menu";
import About from '../screens/AboutPage';

const Stack = createStackNavigator();

const menuNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Menu" component={Menu} />
  </Stack.Navigator>
);

export default menuNavigator;
