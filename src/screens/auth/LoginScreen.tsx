import React, { useState } from 'react';
import {
  ScreenContainer,
  HeadingContainer,
  Row,
  SafeArea,
  ButtonContainer,
} from '../../components/common/Containers';
import {
  BodySubtext,
  BodyText,
  CenterText,
  H1Heading,
} from '../../../assets/Fonts';
import { BackButton, PurpleButton } from '../../components/common/Buttons';
import InputField from '../../components/common/InputField';
import { styles } from './styles';
import { AuthStackScreenProps } from '../../navigation/types';
import { Auth } from 'aws-amplify';
import { useAuthContext } from './AuthContext';

export default function LoginScreen({
  navigation,
}: AuthStackScreenProps<'Login'>) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (value: string) => setEmail(value);
  const onChangePassword = (value: string) => setPassword(value);

  const { dispatch } = useAuthContext();

  const toSignUp = () => {
    navigation.navigate('SignUp');
  };

  const continueAsGuest = () => {
    dispatch({ type: 'SIGN_IN_AS_GUEST' });
  };

  const handleLogin = async () => {
    try {
      console.log('Signing in with email, password');
      const user = await Auth.signIn(email, password);
      console.log('Got user');
      console.log(user);
      dispatch({ type: 'SIGN_IN', user });
      console.log('SIGNED IN');
    } catch (error) {
      console.log('error signing in', error);
    }
  };

  return (
    <SafeArea>
      <BackButton navigation={navigation} />

      <ScreenContainer>
        <HeadingContainer>
          <H1Heading>Welcome back!</H1Heading>
        </HeadingContainer>

        <InputField label="Email" value={email} onChange={onChangeEmail} />
        <InputField
          label="Password"
          value={password}
          onChange={onChangePassword}
          secureTextEntry={true}
        />

        <CenterText>
          <Row>
            <BodySubtext>Don't have an account? </BodySubtext>
            <BodySubtext onPress={toSignUp} style={styles.underline}>
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
