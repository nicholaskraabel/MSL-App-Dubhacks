import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


import Instructions from "../screens/instructions";

const Stack = createStackNavigator();

const InstruNavigator = () => (

  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Instructions" component={Intructions} />
  </Stack.Navigator>
);

export default InstruNavigator;
