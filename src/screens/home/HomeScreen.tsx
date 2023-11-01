import React from 'react';
import {
  SafeArea,
  StartContainer,
  ButtonContainer,
} from '../../components/common/Containers';
import { Title } from '../../../assets/Fonts';
import { TrainingStackScreenProps } from '../../navigation/types';
import { HomeButton } from '../../components/home/HomeButtons';

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
          <HomeButton
            color="purple"
            icon="hearing"
            text="Ear Training"
            onPress={toEarTraining}
          />
          <HomeButton
            color="green"
            icon="fitness-center"
            text="Voice Training"
            onPress={toVoiceTraining}
          />
          <HomeButton
            color="lightGreen"
            icon="mic"
            text="Vocal Practice"
            onPress={toVocalPractice}
          />
          <HomeButton
            color="yellow"
            icon="person"
            text="My Profile"
            onPress={toProfile}
          />
        </ButtonContainer>
      </StartContainer>
    </SafeArea>
  );
}
