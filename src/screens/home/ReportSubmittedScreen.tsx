import React from 'react';
import {
  SafeArea,
  StartContainer,
  ButtonContainer,
} from '../../components/common/Containers';
import { H2Heading } from '../../../assets/Fonts';
import { TrainingStackScreenProps } from '../../navigation/types';
import { PurpleButton } from '../../components/common/Buttons';

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
