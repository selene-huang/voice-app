import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AuthStackNavigator from './stacks/AuthStackNavigator';

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <AuthStackNavigator />
    </NavigationContainer>
  );
}
