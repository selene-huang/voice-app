import React, { useState } from 'react';
import {
  ScreenContainer,
  HeadingContainer,
  Row,
  SafeArea,
  ButtonContainer,
} from '../../common/Containers';
import {
  BodySubtext,
  BodyText,
  CenterText,
  H1Heading,
} from '../../../assets/Fonts';
import { BackButton, PurpleButton } from '../../common/Buttons';
import InputField from '../../common/InputField';
import { styles } from './styles';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (value: string) => setEmail(value);
  const onChangePassword = (value: string) => setPassword(value);

  const navigateToSignUp = () => {
    // TODO
  };

  const continueAsGuest = () => {
    // TODO
  };

  const handleLogin = () => {
    // TODO
  };

  return (
    <SafeArea>
      <BackButton />

      <ScreenContainer>
        <HeadingContainer>
          <H1Heading>{'Welcome back!'}</H1Heading>
        </HeadingContainer>

        <BodyText>Email</BodyText>
        <InputField value={email} onChange={onChangeEmail} />
        <BodyText>Password</BodyText>
        <InputField
          value={password}
          onChange={onChangePassword}
          secureTextEntry={true}
        />

        <CenterText>
          <Row>
            <BodySubtext>Don't have an account? </BodySubtext>
            <BodySubtext onPress={navigateToSignUp} style={styles.underline}>
              Sign up
            </BodySubtext>
            <BodySubtext>!</BodySubtext>
          </Row>
        </CenterText>

        <ButtonContainer>
          <PurpleButton onPress={handleLogin} text="Login" />
        </ButtonContainer>

        <CenterText>
          <Row>
            <BodySubtext>Or </BodySubtext>
            <BodySubtext onPress={continueAsGuest} style={styles.underline}>
              continue as a guest
            </BodySubtext>
            <BodySubtext>.</BodySubtext>
          </Row>
        </CenterText>
      </ScreenContainer>
    </SafeArea>
  );
}
