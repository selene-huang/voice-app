import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type AuthStackParamList = {
  Landing: undefined;
  Login: undefined;
  SignUp: undefined;
  DemographicsSurvey: undefined;
  DataCollection: undefined;
  EmailConfirmation: undefined;
  VoiceDesign: undefined;
};

export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;

export type TrainingStackParamList = {
  Home: undefined;
  Profile: undefined;
  VoiceGoals: undefined;
  AccountDeleted: undefined;
  Report: undefined;
  ReportSubmitted: undefined;
  EarTraining: undefined;
  VoicePractice: undefined;
};

export type TrainingStackScreenProps<T extends keyof TrainingStackParamList> =
  NativeStackScreenProps<TrainingStackParamList, T>;
