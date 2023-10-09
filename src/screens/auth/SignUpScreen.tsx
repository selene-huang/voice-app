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

export default function SignUpScreen({
  navigation,
}: AuthStackScreenProps<'SignUp'>) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onChangeEmail = (value: string) => setEmail(value);
  const onChangeName = (value: string) => setName(value);
  const onChangePassword = (value: string) => setPassword(value);
  const onChangeConfirmPassword = (value: string) => setConfirmPassword(value);

  const navigateToDemographics = () => {
    navigation.navigate('DemographicsSurvey');
  };

  return (
    <SafeArea>
      <BackButton />

      <ScreenContainer>
        <HeadingContainer>
          <H1Heading>Welcome!</H1Heading>
        </HeadingContainer>

        <BodyText>Email</BodyText>
        <InputField value={email} onChange={onChangeEmail} />

        <BodyText>Preferred Name</BodyText>
        <InputField value={name} onChange={onChangeName} />

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
          <PurpleButton onPress={navigateToDemographics} text="Next" />
        </ButtonContainer>
      </ScreenContainer>
    </SafeArea>
  );
}
