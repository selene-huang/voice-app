import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { TrainingStackParamList } from '../types';
import HomeScreen from '../../screens/home/HomeScreen';
import VoiceGoalsScreen from '../../screens/goal/VoiceGoalsScreen';
import ProfileScreen from '../../screens/profile/ProfileScreen';

const TrainingStack = createNativeStackNavigator<TrainingStackParamList>();

/**
 * Stack navigator for the training screens.
 */
export default function TrainingStackNavigator() {
  return (
    <TrainingStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <TrainingStack.Screen name="Home" component={HomeScreen} />
      <TrainingStack.Screen name="Profile" component={ProfileScreen} />
      <TrainingStack.Screen name="VoiceGoals" component={VoiceGoalsScreen} />
    </TrainingStack.Navigator>
  );
}
