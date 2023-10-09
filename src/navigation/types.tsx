import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type AuthStackParamList = {
  Start: undefined;
  Login: undefined;
  ForgotPassword: undefined;
};

export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;
