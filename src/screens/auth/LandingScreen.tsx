import React from 'react';
import {
  SafeArea,
  StartContainer,
  ButtonContainer,
} from '../../components/common/Containers';
import { Title } from '../../../assets/Fonts';
import {
  GrayButton,
  GreenButton,
  PurpleButton,
} from '../../components/common/Buttons';
import { AuthStackScreenProps } from '../../navigation/types';
import { useAuthContext } from './AuthContext';

export default function LandingScreen({
  navigation,
}: AuthStackScreenProps<'Landing'>) {
  const { dispatch } = useAuthContext();

  const toLogin = () => {
    navigation.navigate('Login');
  };

  const toSignUp = () => {
    navigation.navigate('SignUp');
  };

  const continueAsGuest = () => {
    dispatch({ type: 'SIGN_IN_AS_GUEST' });
  };

  return (
    <SafeArea>
      <StartContainer>
        <Title>{'Welcome to\nVoice Versa!'}</Title>

        <ButtonContainer>
          <PurpleButton text="Login" onPress={toLogin} />
          <GreenButton text="Sign Up" onPress={toSignUp} />
          <GrayButton text="Continue as a Guest" onPress={continueAsGuest} />
        </ButtonContainer>
      </StartContainer>
    </SafeArea>
  );
}
