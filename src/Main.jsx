// import 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';

const Stack = createStackNavigator();

const loggedIn = false;

export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerMode: "screen",
          headerTitle: 'App Bomberos',
          headerShown: false,
        }}
      >
        {loggedIn ? (
          <Stack.Screen name="Profile" component={Profile} />
        ) : (
        <Stack.Screen name="Login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}  
