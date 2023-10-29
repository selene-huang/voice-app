import React, { useState } from 'react';
import {
  ScreenContainer,
  HeadingContainer,
  SafeArea,
  ButtonContainer,
} from '../../components/common/Containers';
import { BodyText, H1Heading } from '../../../assets/Fonts';
import { BackButton, PurpleButton } from '../../components/common/Buttons';
import InputField from '../../components/auth/InputField';
import { AuthStackScreenProps } from '../../navigation/types';
import { useAuthContext } from './AuthContext';

export default function SignUpScreen({
  navigation,
}: AuthStackScreenProps<'SignUp'>) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onChangeEmail = (value: string) => setEmail(value);
  const onChangeUsername = (value: string) => setUsername(value);
  const onChangePassword = (value: string) => setPassword(value);
  const onChangeConfirmPassword = (value: string) => setConfirmPassword(value);

  const { userSignUpData, dispatch } = useAuthContext();

  const submitUserInfo = () => {
    // TODO: check that username is valid
    // TODO: validate email & password
    console.log({ email, username, password });
    dispatch({
      type: 'SET_USER_SIGN_UP_DATA',
      data: { email, username, password },
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

        <BodyText>Username</BodyText>
        <InputField value={username} onChange={onChangeUsername} />

        <BodyText>Email</BodyText>
        <InputField value={email} onChange={onChangeEmail} />

        <BodyText>Password</BodyText>
        <InputField
          value={password}
          onChange={onChangePassword}
          secureTextEntry={true}
        />

        <BodyText>Confirm Password</BodyText>
        <InputField
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
