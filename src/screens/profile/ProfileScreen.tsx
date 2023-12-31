import React, { useState } from 'react';
import {
  ScreenContainer,
  HeadingContainer,
  SafeArea,
  ButtonContainer,
} from '../../components/common/Containers';
import { H1Heading } from '../../../assets/Fonts';
import {
  BackButton,
  GrayButton,
  GreenButton,
  PurpleButton,
} from '../../components/common/Buttons';
import InputField from '../../components/common/InputField';
import { TrainingStackScreenProps } from '../../navigation/types';
import { SelectField } from '../../components/profile/SelectField';
import Colors from '../../../assets/Colors';
import { PopUpModal } from '../../components/common/PopUpModal';
import Dropdown from '../../components/common/Dropdown';

export default function ProfileScreen({
  navigation,
}: TrainingStackScreenProps<'Profile'>) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState('');

  const [voiceGoalsDropdownOpen, setVoiceGoalsDropdownOpen] = useState(false);
  const [voiceGoals, setVoiceGoals] = useState(null);
  const [voiceGoalsDropdownItems, setVoiceGoalsDropdownItems] = useState([
    { label: 'feminization', value: 'feminization' },
    { label: 'masculinization', value: 'masculinization' },
    { label: 'androgynous', value: 'androgynous' },
  ]);

  const [unsavedChangesIsVisible, setUnsavedChangesIsVisible] = useState(false);
  const [deleteAccountIsVisible, setDeleteAccountIsVisible] = useState(false);
  const [deleteAccountInput, setDeleteAccountInput] = useState('');
  const [deleteAccountError, setDeleteAccountError] = useState('');

  const onChangeName = (value: string) => setName(value);

  const toggleEdit = () => {
    setEditing(!editing);
  };

  const toggleUnsavedChanges = () => {
    setUnsavedChangesIsVisible(!unsavedChangesIsVisible);
  };
  const discardChanges = () => {
    navigation.goBack();
    setUnsavedChangesIsVisible(false);
  };

  const onInputChange = (text: string) => {
    setDeleteAccountInput(text);
  };
  const deleteAccount = () => {
    if (name === deleteAccountInput) {
      setDeleteAccountError('');
      //TODO: delete account
      setDeleteAccountIsVisible(false);
      navigation.navigate('AccountDeleted');
    } else {
      setDeleteAccountError('The inputs do not match.');
    }
  };
  const openDeleteAccountModal = () => {
    setDeleteAccountIsVisible(true);
  };
  const closeDeleteAccountModal = () => {
    setDeleteAccountInput('');
    setDeleteAccountError('');
    setDeleteAccountIsVisible(false);
  };

  return (
    <SafeArea>
      <BackButton navigation={navigation} onPress={toggleUnsavedChanges} />

      <ScreenContainer>
        <HeadingContainer>
          <H1Heading>
            {editing ? 'Edit Your Profile' : 'Your Profile'}
          </H1Heading>
        </HeadingContainer>

        <InputField
          label="Preferred Name"
          value={name}
          onChange={onChangeName}
          editable={editing}
        />

        <Dropdown
          label="Voice Goals"
          open={voiceGoalsDropdownOpen}
          setOpen={setVoiceGoalsDropdownOpen}
          value={voiceGoals}
          setValue={setVoiceGoals}
          items={voiceGoalsDropdownItems}
          setItems={setVoiceGoalsDropdownItems}
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
          onPress={openDeleteAccountModal}
          disabled={editing}
        />

        <ButtonContainer>
          <PurpleButton
            onPress={toggleEdit}
            text={editing ? 'Save' : 'Edit Profile'}
          />
          {editing ? (
            <GrayButton onPress={toggleEdit} text="Discard Changes" />
          ) : (
            <GreenButton onPress={() => {}} text="Sign out" />
          )}
        </ButtonContainer>
      </ScreenContainer>

      <PopUpModal
        isVisible={unsavedChangesIsVisible}
        title="You have unsaved changes"
        text="Are you sure you want to discard your changes?"
        yesOption="Confirm"
        noOption="Cancel"
        onYes={discardChanges}
        onNo={toggleUnsavedChanges}
      />

      <PopUpModal
        isVisible={deleteAccountIsVisible}
        title="Are you sure you want to delete your account?"
        text={`This will delete all your history, personal information, and goals. This action is irreversible.\n
        Type your name to confirm.`}
        yesOption="Confirm"
        noOption="Cancel"
        onYes={deleteAccount}
        onNo={closeDeleteAccountModal}
        input={deleteAccountInput}
        onInputChange={onInputChange}
        errorText={deleteAccountError}
      />
    </SafeArea>
  );
}
