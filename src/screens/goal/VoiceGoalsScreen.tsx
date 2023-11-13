import React, { useState } from 'react';
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
  const DUMMY_DATA_1 = [{ resonance: 60, weight: 10, pitch: 569 }];
  const DUMMY_DATA_2 = [{ resonance: 20, weight: 85, pitch: 204 }];
  const [showWeight, setShowWeight] = useState(true);

  //TODO FIX
  return (
    <SafeArea>
      <BackButton navigation={navigation} />

      <ScreenContainer>
        <HeadingContainer>
          <H1Heading>Welcome!</H1Heading>
        </HeadingContainer>

        <ButtonContainer>
          <RWPGraph
            type={showWeight ? 'weight' : 'pitch'}
            points={DUMMY_DATA_2}
          />
        </ButtonContainer>

        <ButtonContainer>
          <PurpleButton
            text="Save"
            onPress={() => {
              /* TODO */
            }}
          />
          <GreenButton
            text={`View Resonance v. ${showWeight ? 'Pitch' : 'Weight'}`}
            onPress={() => {
              setShowWeight(!showWeight);
            }}
          />
        </ButtonContainer>
      </ScreenContainer>
    </SafeArea>
  );
}
