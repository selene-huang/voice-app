import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
import {
  ScreenContainer,
  HeadingContainer,
  Row,
  SafeArea,
  ButtonContainer,
} from '../../components/common/Containers';
import { BodyText, H1Heading, LightPurpleText } from '../../../assets/Fonts';
import {
  BackButton,
  GrayButton,
  PurpleButton,
} from '../../components/common/Buttons';
import Colors from '../../../assets/Colors';
import { AuthStackScreenProps } from '../../navigation/types';
import { Auth } from 'aws-amplify';
import { useAuthContext } from './AuthContext';

export default function DataCollectionPolicyScreen({
  navigation,
}: AuthStackScreenProps<'DataCollection'>) {
  const [isChecked, setIsAgreed] = useState(false);
  const { userSignUpData, dispatch } = useAuthContext();

  const onPressAgreement = () => setIsAgreed(!isChecked);

  const createAccountHelper = async (
    username: string,
    email: string,
    password: string
  ) => {
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
        autoSignIn: {
          enabled: true,
        },
      });
      console.log(user);
      dispatch({ type: 'SIGN_IN', user: user });
      console.log('Dispatch successful');
    } catch (error) {
      console.log('error signing up:', error);
    }
  };

  const createAccount = () => {
    createAccountHelper(
      userSignUpData.username,
      userSignUpData.email,
      userSignUpData.password
    );
  };

  const continueAsGuest = () => {
    // TODO
  };

  return (
    <SafeArea>
      <BackButton navigation={navigation} />

      <ScreenContainer>
        <HeadingContainer>
          <H1Heading>Data Collection</H1Heading>
        </HeadingContainer>

        <BodyText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </BodyText>

        <ButtonContainer>
          <Row>
            <Checkbox
              style={{ marginRight: 10 }}
              value={isChecked}
              color={Colors.lightPurple}
              onValueChange={onPressAgreement}
            />
            <BodyText style={{ flex: 1 }}>
              <LightPurpleText>
                I have read and understood the data collection policy.
              </LightPurpleText>
            </BodyText>
          </Row>
        </ButtonContainer>

        <ButtonContainer>
          <PurpleButton onPress={createAccount} text="Create Account" />
          <GrayButton onPress={continueAsGuest} text="Continue as a Guest" />
        </ButtonContainer>
      </ScreenContainer>
    </SafeArea>
  );
}
