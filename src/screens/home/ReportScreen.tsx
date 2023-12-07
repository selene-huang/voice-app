import React, { useState } from 'react';
import {
  SafeArea,
  ButtonContainer,
  ScreenContainer,
  HeadingContainer,
} from '../../components/common/Containers';
import { BodyText, H1Heading } from '../../../assets/Fonts';
import { TrainingStackScreenProps } from '../../navigation/types';
import { BackButton, PurpleButton } from '../../components/common/Buttons';
import InputField from '../../components/common/InputField';

export default function ReportScreen({
  navigation,
}: TrainingStackScreenProps<'Report'>) {
  const [input, setInput] = useState('');
  const onChange = (text: string) => {
    setInput(text);
  };
  const onSubmit = () => {
    //TODO: send as an email or something, probably
    navigation.navigate('ReportSubmitted');
  };

  return (
    <SafeArea>
      <BackButton navigation={navigation} />

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
          <InputField
            value={input}
            onChange={onChange}
            multiline={true}
            height={210}
          />
        </ButtonContainer>

        <ButtonContainer>
          <PurpleButton text="Submit" onPress={onSubmit} />
        </ButtonContainer>
      </ScreenContainer>
    </SafeArea>
  );
}
