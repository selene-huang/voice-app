import React, { useState } from 'react';
import {
  SafeArea,
  StartContainer,
  ButtonContainer,
  ScreenContainer,
  HeadingContainer,
} from '../../components/common/Containers';
import {
  BodyEmphasis,
  BodyText,
  CenterText,
  H1Heading,
  H2Heading,
  LightPurpleText,
  Title,
  YellowText,
} from '../../../assets/Fonts';
import { TrainingStackScreenProps } from '../../navigation/types';
import { HomeButton } from '../../components/home/HomeButtons';
import { styles } from './styles';
import { BackButton, PurpleButton } from '../../components/common/Buttons';
import InputField from '../../components/common/InputField';
import { View } from 'react-native';

export default function ReportSubmittedScreen({
  navigation,
}: TrainingStackScreenProps<'ReportSubmitted'>) {
  const toHome = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeArea>
      <StartContainer>
        <H2Heading>Your report has been submitted.</H2Heading>

        <ButtonContainer>
          <PurpleButton text="Return to Home Screen" onPress={toHome} />
        </ButtonContainer>
      </StartContainer>
    </SafeArea>
  );
}
