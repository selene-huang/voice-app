import React from 'react';
import {
  SafeArea,
  StartContainer,
  ButtonContainer,
} from '../../common/Containers';
import { Title } from '../../../assets/Fonts';
import { GrayButton, GreenButton, PurpleButton } from '../../common/Buttons';

export default function LandingScreen() {
  const navigateToLogin = () => {
    // TODO
  };
  const navigateToSignUp = () => {
    // TODO
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
