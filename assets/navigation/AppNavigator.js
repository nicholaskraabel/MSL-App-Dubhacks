import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import NewListingButton from "./NewListingButton";


import menuNavigator from '../navigation/menuNavigator';
import aboutNavigator from '../navigation/aboutNavigator';
import homeNavigator from '../navigation/homeNavigator';
import DrawingPad from '../navigation/DrawingPadNavigator';




const Tab = createBottomTabNavigator();

const AppNavigator = ({color, size}) => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={homeNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="home" size={size} color={color} />
      ),
      }}
      />
    <Tab.Screen
      name="Menu"
      component={menuNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="About"
      component={aboutNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="information-outline" color={color} size={size} />
        ),
      }}
    />

    <Tab.Screen
      name="Drawingpad"
      component={DrawingPad}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="information-outline" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>

);

export default AppNavigator