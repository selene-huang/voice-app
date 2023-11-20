import React from 'react';
import {
  SafeArea,
  StartContainer,
  ButtonContainer,
  ScreenContainer,
  HeadingContainer,
} from '../../components/common/Containers';
import {
  BodyText,
  CenterText,
  H1Heading,
  Title,
  YellowText,
} from '../../../assets/Fonts';
import { TrainingStackScreenProps } from '../../navigation/types';
import { HomeButton } from '../../components/home/HomeButtons';
import { styles } from './styles';

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
      <ScreenContainer>
        <HeadingContainer>
          {/* TODO: use user's preferred name? */}
          <H1Heading>{'Hi!'}</H1Heading>
        </HeadingContainer>

        <BodyText>What would you like to do today?</BodyText>

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

        <ButtonContainer>
          <CenterText>
            <BodyText style={styles.underline}>
              <YellowText>Report an Issue</YellowText>
            </BodyText>
          </CenterText>
        </ButtonContainer>
      </ScreenContainer>
    </SafeArea>
  );
}
