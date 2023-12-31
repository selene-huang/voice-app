import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AuthStackParamList } from '../types';
import LandingScreen from '../../screens/auth/LandingScreen';
import LoginScreen from '../../screens/auth/LoginScreen';
import SignUpScreen from '../../screens/auth/SignUpScreen';
import DemographicsSurveyScreen from '../../screens/auth/DemographicsSurveyScreen';
import DataCollectionPolicyScreen from '../../screens/auth/DataCollectionPolicyScreen';
import EmailConfirmationScreen from '../../screens/auth/EmailConfirmationScreen';
import VoiceDesignScreen from '../../screens/auth/VoiceDesignScreen';

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
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
      <AuthStack.Screen
        name="DemographicsSurvey"
        component={DemographicsSurveyScreen}
      />
      <AuthStack.Screen
        name="DataCollection"
        component={DataCollectionPolicyScreen}
      />
      <AuthStack.Screen
        name="EmailConfirmation"
        component={EmailConfirmationScreen}
      />
      <AuthStack.Screen name="VoiceDesign" component={VoiceDesignScreen} />
    </AuthStack.Navigator>
  );
}
