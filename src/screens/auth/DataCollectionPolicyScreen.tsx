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
  LightPurpleText,
} from '../../../assets/Fonts';
import { BackButton, GrayButton, PurpleButton } from '../../common/Buttons';
import InputField from '../../common/InputField';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import Colors from '../../../assets/Colors';

export default function DataCollectionPolicyScreen() {
  const [isAgreed, setIsAgreed] = useState(false);

  const onPressAgreement = () => setIsAgreed(!isAgreed);

  const createAccount = () => {
    // TODO
  };

  const continueAsGuest = () => {
    // TODO
  };

  return (
    <SafeArea>
      <BackButton />

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

        <BodyText>
          <Icon
            name="check"
            size={12}
            color={Colors.lightPurple}
            onPress={onPressAgreement}
          />
          <LightPurpleText>
            {'  '}I have read and understand the data collection policy.
          </LightPurpleText>
        </BodyText>

        <ButtonContainer>
          <PurpleButton onPress={createAccount} text="Create Account" />
          <GrayButton onPress={continueAsGuest} text="Continue as a Guest" />
        </ButtonContainer>
      </ScreenContainer>
    </SafeArea>
  );
}
