import React, { useState } from 'react';
import {
  ScreenContainer,
  HeadingContainer,
  SafeArea,
  ButtonContainer,
} from '../../common/Containers';
import { BodyText, H1Heading } from '../../../assets/Fonts';
import { BackButton, PurpleButton } from '../../common/Buttons';
import InputField from '../../common/InputField';

export default function DemographicsSurveyScreen() {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [region, setRegion] = useState('');
  const [voiceGoals, setVoiceGoals] = useState('');
  const [trainingTime, setTrainingTime] = useState('');

  const onChangeAge = (value: string) => setAge(value);
  const onChangeGender = (value: string) => setGender(value);
  const onChangeRegion = (value: string) => setRegion(value);
  const onChangeVoiceGoals = (value: string) => setVoiceGoals(value);
  const onChangeTrainingTime = (value: string) => setTrainingTime(value);

  const navigateToCollectionPolicy = () => {
    // TODO
  };

  return (
    <SafeArea>
      <BackButton />

      <ScreenContainer>
        <HeadingContainer>
          <H1Heading>{'Demographics\nSurvey'}</H1Heading>
        </HeadingContainer>

        <BodyText>Age</BodyText>
        <InputField value={age} onChange={onChangeAge} keyboardType="numeric" />

        <BodyText>Gender</BodyText>
        <InputField value={gender} onChange={onChangeGender} />

        <BodyText>Region</BodyText>
        <InputField value={region} onChange={onChangeRegion} />

        <BodyText>Voice Goals</BodyText>
        <InputField value={voiceGoals} onChange={onChangeVoiceGoals} />

        <BodyText>Time Spent Training</BodyText>
        <InputField value={trainingTime} onChange={onChangeTrainingTime} />

        <ButtonContainer>
          <PurpleButton onPress={navigateToCollectionPolicy} text="Next" />
        </ButtonContainer>
      </ScreenContainer>
    </SafeArea>
  );
}
