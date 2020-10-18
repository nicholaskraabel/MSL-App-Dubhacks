import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


import Home from "../screens/home.js";

const Stack = createStackNavigator();

const homeNavigator = () => (

  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

export default homeNavigator;