import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type AuthStackParamList = {
  Landing: undefined;
  Login: undefined;
  SignUp: undefined;
  DemographicsSurvey: undefined;
  DataCollection: undefined;
  EmailConfirmation: undefined;
};

export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;

export type TrainingStackParamList = {
  Home: undefined;
};

export type TrainingStackScreenProps<T extends keyof TrainingStackParamList> =
  NativeStackScreenProps<TrainingStackParamList, T>;
