import React, { useState } from 'react';
import {
  ScreenContainer,
  HeadingContainer,
  SafeArea,
  ButtonContainer,
} from '../../components/common/Containers';
import { BodyText, H1Heading } from '../../../assets/Fonts';
import {
  BackButton,
  GrayButton,
  GreenButton,
  PurpleButton,
} from '../../components/common/Buttons';
import InputField from '../../components/auth/InputField';
import { TrainingStackScreenProps } from '../../navigation/types';
import { SelectField } from '../../components/profile/SelectField';
import Colors from '../../../assets/Colors';

export default function ProfileScreen({
  navigation,
}: TrainingStackScreenProps<'Profile'>) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState('');
  const [voiceGoals, setVoiceGoals] = useState('');
  // TODO: fetch name & goals from database

  const onChangeName = (value: string) => setName(value);
  // TODO: change to dropdown
  const onChangeVoiceGoals = (value: string) => setVoiceGoals(value);

  const toggleEdit = () => {
    setEditing(!editing);
  };

  return (
    <SafeArea>
      <BackButton navigation={navigation} />

      <ScreenContainer>
        <HeadingContainer>
          <H1Heading>
            {editing ? 'Your Profile' : 'Edit Your Profile'}
          </H1Heading>
        </HeadingContainer>

        <BodyText>Preferred Name</BodyText>
        <InputField value={name} onChange={onChangeName} editable={editing} />

        <BodyText>Voice Goals</BodyText>
        <InputField
          value={voiceGoals}
          onChange={onChangeVoiceGoals}
          editable={editing}
        />

        <SelectField
          text="Edit my voice goals"
          color={Colors.lightPurple}
          onPress={() => {
            navigation.navigate('VoiceGoals');
          }}
          disabled={editing}
        />

        <SelectField
          text="Delete my account"
          color={Colors.cream}
          onPress={() => {
            // TODO: navigate to account deletion
          }}
          disabled={editing}
        />

        <ButtonContainer>
          <PurpleButton
            onPress={toggleEdit}
            text={editing ? 'Save' : 'Edit Profile'}
          />
          {editing ? (
            <GrayButton onPress={() => {}} text="Discard Changes" />
          ) : (
            <GreenButton onPress={() => {}} text="Sign out" />
          )}
        </ButtonContainer>
      </ScreenContainer>
    </SafeArea>
  );
}
