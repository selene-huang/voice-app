import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AuthStackNavigator from './stacks/AuthStackNavigator';
import { View } from 'react-native';
import Colors from '../../assets/Colors';

export default function AppNavigator() {
  return (
    <View style={{ backgroundColor: Colors.darkGray, flex: 1 }}>
      <NavigationContainer>
        <AuthStackNavigator />
      </NavigationContainer>
    </View>
  );
}
