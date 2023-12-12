import React from 'react';
import {
  SafeArea,
  ScreenContainer,
  HeadingContainer,
  ButtonContainer,
} from '../../components/common/Containers';
import { BodyText, H1Heading } from '../../../assets/Fonts';
import { TrainingStackScreenProps } from '../../navigation/types';
import { View } from 'react-native';
import { BackButton, PurpleButton } from '../../components/common/Buttons';
import Colors from '../../../assets/Colors';

export default function ExerciseTemplate({
  navigation,
}: TrainingStackScreenProps<'VoicePractice'>) {
  const navigateToNextScreen = () => {
    // TODO: replace with actual navigation
  };

  return (
    <SafeArea>
      <BackButton navigation={navigation} />

      <ScreenContainer>
        <HeadingContainer>
          <H1Heading>Voice Practice</H1Heading>
        </HeadingContainer>

        <BodyText>
          You will be presented with a series of sentences. Record yourself
          reading each sentence and describe the voice you are using.
        </BodyText>

        {/* TODO: replace with a video or animation demonstrating the exercise */}
        <View
          style={{
            backgroundColor: Colors.lightGray,
            height: 201,
            width: 265,
            marginVertical: 31,
          }}
        />

        <ButtonContainer>
          <PurpleButton text="Begin" onPress={navigateToNextScreen} />
        </ButtonContainer>
      </ScreenContainer>
    </SafeArea>
  );
}
