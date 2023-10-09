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

export default function LandingScreen({
  navigation,
}: AuthStackScreenProps<'Landing'>) {
  const navigateToLogin = () => {
    navigation.navigate('Login');
  };
  const navigateToSignUp = () => {
    navigation.navigate('SignUp');
  };
  const continueAsGuest = () => {
    // TODO
  };

  return (
    <SafeArea>
      <StartContainer>
        <Title>{'Welcome to\nVoice Training!'}</Title>

        <ButtonContainer>
          <PurpleButton text="Login" onPress={navigateToLogin} />
          <GreenButton text="Sign Up" onPress={navigateToSignUp} />
          <GrayButton text="Continue as a Guest" onPress={continueAsGuest} />
        </ButtonContainer>
      </StartContainer>
    </SafeArea>
  );
}
