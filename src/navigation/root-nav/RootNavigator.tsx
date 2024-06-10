import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, ShowResult} from '~/screens';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainScreen"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          animation: 'slide_from_right'
        }}>
        <Stack.Screen name="MainScreen" component={HomeScreen} />
        <Stack.Screen name="ResultScreen" component={ShowResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
