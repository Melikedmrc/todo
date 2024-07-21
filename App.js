import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, LoginScreen, RegisterScreen, TransitionScreen, ContractScreen, CalendarScreen, TodoScreen, ProfileScreen, SuggestionScreen } from './src/screen/ScreenImport';
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux';
import store from './src/Redux/store';

// import BottomTabs from './src/component/ui/shared/bottomTabs';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Contract" component={ContractScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Transition" component={TransitionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Calendar" component={CalendarScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Todo" component={TodoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Suggestion" component={SuggestionScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
  );
}
