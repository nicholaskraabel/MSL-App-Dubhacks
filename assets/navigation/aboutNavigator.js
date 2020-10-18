import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AboutPage from '../screens/AboutPage'

const Stack = createStackNavigator();

const aboutNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="About" component={AboutPage} />
  </Stack.Navigator>
);

export default aboutNavigator;
