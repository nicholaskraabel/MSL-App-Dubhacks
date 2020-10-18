import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


import ReadAct from "../screens/readingActivity";

const Stack = createStackNavigator();

const readActNavigator = () => (

  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ReadAct" component={ReadAct} />
  </Stack.Navigator>
);

export default readActNavigator;
