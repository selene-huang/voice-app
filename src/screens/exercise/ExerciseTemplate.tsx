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
}: TrainingStackScreenProps<'EarTraining'>) {
  // TODO: replace 'EarTraining' with the correct screen

  const navigateToNextScreen = () => {
    // TODO: replace with actual navigation
  };

  return (
    <SafeArea>
      <BackButton navigation={navigation} />

      <ScreenContainer>
        <HeadingContainer>
          {/* TODO: replace with actual title */}
          <H1Heading>{'Exercise Title'}</H1Heading>
        </HeadingContainer>

        <BodyText>
          TODO: put activity instructions here. For now, I'll flood it with a
          bunch of text so you know what to expect the screen to look like once
          instructions are implemented. You may have to manually break some of
          the text, I have not figured out a good way to get it to properly fit
          the screen size yet.
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

        <BodyText>
          TODO: explain why we do this exercise here. What does it help with?
          What does it improve?
        </BodyText>

        <ButtonContainer>
          <PurpleButton text="Begin" onPress={navigateToNextScreen} />
        </ButtonContainer>
      </ScreenContainer>
    </SafeArea>
  );
}
