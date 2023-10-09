import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type AuthStackParamList = {
  Landing: undefined;
  Login: undefined;
  SignUp: undefined;
  DemographicsSurvey: undefined;
  DataCollection: undefined;
};

export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;
