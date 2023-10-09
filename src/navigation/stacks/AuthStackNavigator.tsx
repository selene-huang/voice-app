import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AuthStackParamList } from '../types';
import LandingScreen from '../../screens/auth/LandingScreen';
import LoginScreen from '../../screens/auth/LoginScreen';
import SignUpScreen from '../../screens/auth/SignUpScreen';
import DemographicsSurveyScreen from '../../screens/auth/DemographicsSurveyScreen';
import DataCollectionPolicyScreen from '../../screens/auth/DataCollectionPolicyScreen';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

/**
 * Stack navigator for the authentication screens.
 */
export default function AuthStackNavigator() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Landing" component={LandingScreen} />
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Signup" component={SignUpScreen} />
      <AuthStack.Screen
        name="Demographics Survey"
        component={DemographicsSurveyScreen}
      />
      <AuthStack.Screen
        name="Data Collection"
        component={DataCollectionPolicyScreen}
      />
    </AuthStack.Navigator>
  );
}
