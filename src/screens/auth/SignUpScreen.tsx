import React, { useState } from 'react';
import {
  ScreenContainer,
  HeadingContainer,
  SafeArea,
  ButtonContainer,
} from '../../components/common/Containers';
import { BodyText, H1Heading } from '../../../assets/Fonts';
import { BackButton, PurpleButton } from '../../components/common/Buttons';
import InputField from '../../components/common/InputField';
import { AuthStackScreenProps } from '../../navigation/types';
import { useAuthContext } from './AuthContext';

export default function SignUpScreen({
  navigation,
}: AuthStackScreenProps<'SignUp'>) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onChangeEmail = (value: string) => setEmail(value);
  const onChangePassword = (value: string) => setPassword(value);
  const onChangeConfirmPassword = (value: string) => setConfirmPassword(value);

  const { dispatch } = useAuthContext();

  const submitUserInfo = () => {
    // TODO: validate email
    // TODO: password should be automatically validated by Amplify, but we'll need to handle the error
    console.log({ email, password });
    dispatch({
      type: 'SET_USER_SIGN_UP_DATA',
      data: { email, password },
    });
    console.log('Submitted');
    navigation.navigate('DemographicsSurvey');
  };

  return (
    <SafeArea>
      <BackButton navigation={navigation} />

      <ScreenContainer>
        <HeadingContainer>
          <H1Heading>Welcome!</H1Heading>
        </HeadingContainer>

        <InputField label="Email" value={email} onChange={onChangeEmail} />

        <InputField
          label="Password"
          value={password}
          onChange={onChangePassword}
          secureTextEntry={true}
        />

        <InputField
          label="Confirm Password"
          value={confirmPassword}
          onChange={onChangeConfirmPassword}
          secureTextEntry={true}
        />

        <ButtonContainer>
          <PurpleButton onPress={submitUserInfo} text="Next" />
        </ButtonContainer>
      </ScreenContainer>
    </SafeArea>
  );
}
