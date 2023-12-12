import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { TrainingStackParamList } from '../types';
import HomeScreen from '../../screens/home/HomeScreen';
import VoiceGoalsScreen from '../../screens/goal/VoiceGoalsScreen';
import ProfileScreen from '../../screens/profile/ProfileScreen';
import AccountDeletedScreen from '../../screens/profile/AccountDeletedScreen';
import ReportScreen from '../../screens/home/ReportScreen';
import ReportSubmittedScreen from '../../screens/home/ReportSubmittedScreen';
import EarTrainingScreen from '../../screens/exercise/EarTrainingScreen';

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
      <TrainingStack.Screen
        name="AccountDeleted"
        component={AccountDeletedScreen}
      />
      <TrainingStack.Screen name="Report" component={ReportScreen} />
      <TrainingStack.Screen
        name="ReportSubmitted"
        component={ReportSubmittedScreen}
      />
      <TrainingStack.Screen name="EarTraining" component={EarTrainingScreen} />
      <TrainingStack.Screen name="VoicePractice" component={} />
    </TrainingStack.Navigator>
  );
}
