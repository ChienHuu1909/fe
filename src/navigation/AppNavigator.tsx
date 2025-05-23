// src/navigation/AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../pages/LoginScreen';
import HomeScreen from '../pages/HomeScreen';
import SearchFlightScreen from '../pages/SearchFlightScreen';
import FlightScreen from '../pages/FlightScreen';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  SearchFlight: undefined;
  Flight: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="SearchFlight" 
          component={SearchFlightScreen} 
          options={{ title: 'Search Flights' }} 
        />
        <Stack.Screen 
          name="Flight" 
          component={FlightScreen} 
          options={{ title: 'Flight Details' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
