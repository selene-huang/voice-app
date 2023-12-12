import React from 'react';
import {
  SafeArea,
  ButtonContainer,
  ScreenContainer,
  HeadingContainer,
} from '../../components/common/Containers';
import {
  BodyText,
  CenterText,
  H1Heading,
  YellowText,
} from '../../../assets/Fonts';
import { TrainingStackScreenProps } from '../../navigation/types';
import { HomeButton } from '../../components/home/HomeButtons';
import { styles } from './styles';

export default function HomeScreen({
  navigation,
}: TrainingStackScreenProps<'Home'>) {
  const toEarTraining = () => {
    navigation.navigate('EarTraining');
  };
  const toVocalTraining = () => {
    // TODO
  };
  const toVoicePractice = () => {
    navigation.navigate('VoicePractice');
  };
  const toProfile = () => {
    navigation.navigate('Profile');
  };
  const toReport = () => {
    navigation.navigate('Report');
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
            text="Vocal Training"
            onPress={toVocalTraining}
          />
          <HomeButton
            color="lightGreen"
            icon="mic"
            text="Voice Practice"
            onPress={toVoicePractice}
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
            <BodyText style={styles.underline} onPress={toReport}>
              <YellowText>Report an Issue</YellowText>
            </BodyText>
          </CenterText>
        </ButtonContainer>
      </ScreenContainer>
    </SafeArea>
  );
}
