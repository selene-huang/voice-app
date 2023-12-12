import React from 'react';
import {
  SafeArea,
  StartContainer,
  ButtonContainer,
  HeadingContainer,
} from '../../components/common/Containers';
import { BodyText, H1Heading } from '../../../assets/Fonts';
import { TrainingStackScreenProps } from '../../navigation/types';
import { PurpleButton } from '../../components/common/Buttons';

export default function CheckInSurveySubmittedScreen({
  navigation,
}: TrainingStackScreenProps<'CheckInSurveySubmitted'>) {
  const toHome = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeArea>
      <StartContainer>
        <HeadingContainer>
          <H1Heading>{'Survey\nsubmitted.'}</H1Heading>
        </HeadingContainer>
        <BodyText>
          {'Thanks for taking the time to help\nfurther our research!'}
        </BodyText>

        <ButtonContainer>
          <PurpleButton text="Next" onPress={toHome} />
        </ButtonContainer>
      </StartContainer>
    </SafeArea>
  );
}
