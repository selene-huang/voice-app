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
import { TrainingStackScreenProps } from '../../navigation/types';

export default function HomeScreen({
  navigation,
}: TrainingStackScreenProps<'Home'>) {
  const toEarTraining = () => {
    // TODO
  };
  const toVoiceTraining = () => {
    // TODO
  };
  const toVocalPractice = () => {
    // TODO
  };
  const toProfile = () => {
    // TODO
  };

  return (
    <SafeArea>
      <StartContainer>
        <Title>{'Hi!'}</Title>

        <ButtonContainer>
          <PurpleButton text="Ear Training" onPress={toEarTraining} />
          <GreenButton text="Voice Training" onPress={toVoiceTraining} />
          <GrayButton text="Vocal Practice" onPress={toVocalPractice} />
        </ButtonContainer>
      </StartContainer>
    </SafeArea>
  );
}
