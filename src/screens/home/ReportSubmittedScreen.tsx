import React, { useState } from 'react';
import {
  SafeArea,
  StartContainer,
  ButtonContainer,
  ScreenContainer,
  HeadingContainer,
} from '../../components/common/Containers';
import {
  BodyEmphasis,
  BodyText,
  CenterText,
  H1Heading,
  LightPurpleText,
  Title,
  YellowText,
} from '../../../assets/Fonts';
import { TrainingStackScreenProps } from '../../navigation/types';
import { HomeButton } from '../../components/home/HomeButtons';
import { styles } from './styles';
import { BackButton, PurpleButton } from '../../components/common/Buttons';
import InputField from '../../components/common/InputField';
import { View } from 'react-native';

export default function ReportSubmittedScreen({
  navigation,
}: TrainingStackScreenProps<'ReportSubmitted'>) {
  const toHome = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeArea>
      <BackButton navigation={navigation} onPress={toHome} />

      <ScreenContainer>
        <HeadingContainer>
          <H1Heading>Report an Issue</H1Heading>
        </HeadingContainer>

        <BodyText>
          If any harm has come to you from the use of this app; if you would
          like to report a bug; or you have any other kind of feedback, leave a
          message below! All feedback will remain anonymous.
        </BodyText>

        <ButtonContainer>
          <View style={{ height: 210 }}>
            <CenterText>
              <BodyEmphasis>
                <LightPurpleText>
                  Your report has been submitted.
                </LightPurpleText>
              </BodyEmphasis>
            </CenterText>
          </View>
        </ButtonContainer>

        <ButtonContainer>
          <PurpleButton text="Return to Home Screen" onPress={toHome} />
        </ButtonContainer>
      </ScreenContainer>
    </SafeArea>
  );
}
