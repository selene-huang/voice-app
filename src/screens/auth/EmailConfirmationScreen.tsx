import React, { useRef, useState } from 'react';
import {
  ScreenContainer,
  HeadingContainer,
  SafeArea,
  ButtonContainer,
} from '../../components/common/Containers';
import OTPTextInput from 'react-native-otp-textinput';
import { BodyText, H1Heading } from '../../../assets/Fonts';
import { BackButton, PurpleButton } from '../../components/common/Buttons';
import InputField from '../../components/auth/InputField';
import { AuthStackScreenProps } from '../../navigation/types';
import { useAuthContext } from './AuthContext';
import { TextInput } from 'react-native';
import Colors from '../../../assets/Colors';
import { styles } from './styles';

export default function EmailConfirmationScreen({
  navigation,
}: AuthStackScreenProps<'SignUp'>) {
  const { userSignUpData, dispatch } = useAuthContext();

  const [serialNumberInput, setSerialNumberInput] = useState<string>('');

  const otpInput = useRef<OTPTextInput>(null);

  const onChangeSerialNumber = (text: string) => {
    const value = text.replace(/\D/g, '');
    setSerialNumberInput(value);
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
          inputCount={7}
          tintColor={Colors.purple}
          defaultValue={serialNumberInput}
          inputCellLength={1}
          handleTextChange={onChangeSerialNumber}
          containerStyle={styles.otpContainerStyle}
          textInputStyle={styles.otpTextInputStyle}
          // isValid={!showErrorMessage} TODO: add error handling
          keyboardType="number-pad"
          autoFocus={false}
        />

        <PurpleButton text="Verify" onPress={() => {}} disabled={false} />
      </ScreenContainer>
    </SafeArea>
  );
}
