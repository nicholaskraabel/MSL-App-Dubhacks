import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";


import NewListingButton from "./NewListingButton";


import InstruNavigator from '../navigation/InstrucNavigator';
import aboutNavigator from '../navigation/aboutNavigator';
import homeNavigator from '../navigation/homeNavigator';
import DrawingPad from '../navigation/DrawingPadNavigator';
import ReadActivity from '../navigation/ReadingActivityNavigator'
import WritingAct from '../navigation/writingActivityNavigator'




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
      name="Instructions"
      component={InstruNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="clipboard" size={size} color={color} />
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
          <MaterialCommunityIcons name="brush" color={color} size={size} />
        ),
      }}
    />
    

  <Tab.Screen
  name="Read Activity"
  component={ReadActivity}
  options={{
    tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons name="typewriter" color={color} size={size} />
     ),
    }}
  />

  <Tab.Screen
  name="Writing Activity"
  component={WritingAct}
  options={{
    tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons name="book-open-variant" color={color} size={size} />
     ),
    }}
  />


  </Tab.Navigator>

);

export default AppNavigator