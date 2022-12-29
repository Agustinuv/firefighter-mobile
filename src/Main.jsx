// import 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';

const Stack = createStackNavigator();

export default function Main() {
    const [isLogged, setIsLogged] = React.useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerMode: "screen",
          headerTitle: 'App Bomberos',
          headerShown: false,
        }}
      >
        {isLogged ? (
          <Stack.Screen name="Profile">
            { () => <Profile isLogged={isLogged} setIsLogged={setIsLogged} /> }
          </Stack.Screen>
        ) : (
        <Stack.Screen name="Login">
            { () => <Login isLogged={isLogged} setIsLogged={setIsLogged} /> }
        </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}  
