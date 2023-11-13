import React from 'react';
import {
  SafeArea,
  StartContainer,
  ButtonContainer,
  HeadingContainer,
  ScreenContainer,
} from '../../components/common/Containers';
import { H1Heading, Title } from '../../../assets/Fonts';
import { TrainingStackScreenProps } from '../../navigation/types';
import { HomeButton } from '../../components/home/HomeButtons';
import {
  BackButton,
  GreenButton,
  PurpleButton,
} from '../../components/common/Buttons';
import { RWPGraph } from '../../components/common/RWPGraph';

export default function VoiceGoalsScreen({
  navigation,
}: TrainingStackScreenProps<'Home'>) {
  //TODO FIX
  return (
    <SafeArea>
      <BackButton navigation={navigation} />

      <ScreenContainer>
        <HeadingContainer>
          <H1Heading>Welcome!</H1Heading>
        </HeadingContainer>

        <ButtonContainer>
          <RWPGraph />
        </ButtonContainer>

        <ButtonContainer>
          <PurpleButton
            text="Save"
            onPress={() => {
              /* TODO */
            }}
          />
          <GreenButton
            text="View Resonance v. Pitch"
            onPress={() => {
              /* TODO */
            }}
          />
        </ButtonContainer>
      </ScreenContainer>
    </SafeArea>
  );
}
