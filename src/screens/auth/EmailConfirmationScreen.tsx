import React, { useRef, useState } from 'react';
import {
  ScreenContainer,
  HeadingContainer,
  SafeArea,
  ButtonContainer,
} from '../../components/common/Containers';
import OTPTextInput from 'react-native-otp-textinput';
import { BackButton, PurpleButton } from '../../components/common/Buttons';
import { AuthStackScreenProps } from '../../navigation/types';
import { useAuthContext } from './AuthContext';
import { Auth } from 'aws-amplify';
import Colors from '../../../assets/Colors';
import { styles } from './styles';
import { H1Heading } from '../../../assets/Fonts';

export default function EmailConfirmationScreen({
  navigation,
}: AuthStackScreenProps<'EmailConfirmation'>) {
  const { userSignUpData, dispatch } = useAuthContext();

  const [codeInput, setCodeInput] = useState<string>('');

  const otpInput = useRef<OTPTextInput>(null);

  const onChangeCode = (text: string) => {
    const value = text.replace(/\D/g, '');
    setCodeInput(value);
  };

  const submitVerification = async () => {
    try {
      console.log('Submitting code');
      console.log(codeInput);
      await Auth.confirmSignUp(userSignUpData.email, codeInput);
      console.log('Signing in with email, password');
      const user = await Auth.signIn(
        userSignUpData.email,
        userSignUpData.password
      );
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
          <H1Heading>Please verify your email.</H1Heading>
        </HeadingContainer>

        <OTPTextInput
          ref={otpInput}
          inputCount={6}
          tintColor={Colors.purple}
          defaultValue={codeInput}
          inputCellLength={1}
          handleTextChange={onChangeCode}
          containerStyle={styles.otpContainerStyle}
          textInputStyle={styles.otpTextInputStyle}
          // isValid={!showErrorMessage} TODO: add error handling
          keyboardType="number-pad"
          autoFocus={false}
        />

        <ButtonContainer>
          <PurpleButton
            text="Verify"
            onPress={submitVerification}
            disabled={codeInput.length !== 6}
          />
        </ButtonContainer>
      </ScreenContainer>
    </SafeArea>
  );
}
