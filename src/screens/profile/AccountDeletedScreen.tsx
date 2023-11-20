import React from 'react';
import {
  ScreenContainer,
  SafeArea,
  ButtonContainer,
  StartContainer,
} from '../../components/common/Containers';
import { BodyText, H1Heading } from '../../../assets/Fonts';
import { PurpleButton } from '../../components/common/Buttons';
import { TrainingStackScreenProps } from '../../navigation/types';
import { useAuthContext } from '../auth/AuthContext';

export default function AccountDeletedScreen({
  navigation,
}: TrainingStackScreenProps<'AccountDeleted'>) {
  const { dispatch } = useAuthContext();
  const toLandingPage = () => {
    dispatch({ type: 'SIGN_OUT' });
  };

  return (
    <SafeArea>
      <ScreenContainer>
        <StartContainer>
          <H1Heading>Your account has been deleted.</H1Heading>
          <BodyText>Thanks for using Voice Versa!</BodyText>

          <ButtonContainer>
            <PurpleButton
              onPress={toLandingPage}
              text="Return to Landing Page"
            />
          </ButtonContainer>
        </StartContainer>
      </ScreenContainer>
    </SafeArea>
  );
}
