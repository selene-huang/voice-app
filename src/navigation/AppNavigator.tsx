import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AuthStackNavigator from './stacks/AuthStackNavigator';
import { useAuthContext } from '../screens/auth/AuthContext';
import TrainingStackNavigator from './stacks/TrainingStackNavigator';
import LoadingSpinner from '../components/common/LoadingSpinner';

export default function AppNavigator() {
  const { user, isLoading } = useAuthContext();

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <NavigationContainer>
      {user ? <TrainingStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}
