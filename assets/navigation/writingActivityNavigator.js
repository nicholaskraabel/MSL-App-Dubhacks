import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


import UserTextInput from "../screens/WritingAct";

const Stack = createStackNavigator();

const WriteActNavigator = () => (

  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="WritingAct" component={UserTextInput} />
  </Stack.Navigator>
);

export default WriteActNavigator;
