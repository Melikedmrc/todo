import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, LoginScreen, RegisterScreen, TransitionScreen, ContractScreen } from './src/screen/ScreenImport';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Contract" component={ContractScreen} options={{ headerShown: true }} />
        <Stack.Screen name="Transition" component={TransitionScreen} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
