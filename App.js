import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import indexScr from './src/screens/indexScr';
import altscreen from './src/screens/altscreen';

const Tab = createBottomTabNavigator ();

function MyStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
            screenOptions={{
            headerShown: false
          }}>
        <Tab.Screen
          name="HomePage"
          component={indexScr}
          options={{ title: 'blog'}, {headerLeft: null} } 
        />
        <Tab.Screen
          name="AltScreen"
          component={altscreen}
          options={{ title: 'blog'}, {headerLeft: null} } 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;