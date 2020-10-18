import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DrawingPad from "../screens/DrawingPad.js";

const Stack = createStackNavigator();

const DrawingPadNavigator = () => (

  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="DrawingPad" component={DrawingPad} />
  </Stack.Navigator>
);

export default DrawingPadNavigator;