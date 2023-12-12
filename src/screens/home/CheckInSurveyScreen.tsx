import React, { useState } from 'react';
import {
  ScreenContainer,
  HeadingContainer,
  SafeArea,
  ButtonContainer,
  Row,
} from '../../components/common/Containers';
import { BodyText, H1Heading } from '../../../assets/Fonts';
import { GrayButton, PurpleButton } from '../../components/common/Buttons';
import { TrainingStackScreenProps } from '../../navigation/types';
import Colors from '../../../assets/Colors';
import { PopUpModal } from '../../components/common/PopUpModal';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/AntDesign';
import Dropdown from '../../components/common/Dropdown';

export default function CheckInSurveyScreen({
  navigation,
}: TrainingStackScreenProps<'CheckInSurvey'>) {
  // TODO: fetch name from database
  const [name, setName] = useState('');
  const [dialogueIsVisible, setDialogueIsVisible] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [trainingTime, setTrainingTime] = useState(null);
  const [dropdownItems, setDropdownItems] = useState([
    { label: '<1 month', value: '<1 month' },
    { label: '1-3 months', value: '1-3 months' },
    { label: '3-6 months', value: '3-6 months' },
    { label: '6 months-1 year', value: '6 months-1 year' },
    { label: '1-2 years', value: '1-2 years' },
    { label: '>2 years', value: '>2 years' },
  ]);

  const toHomeScreen = () => {
    navigation.navigate('Home');
  };

  const toSubmissionScreen = () => {
    navigation.navigate('CheckInSurveySubmitted');
  };

  const toggleDialogue = () => {
    setDialogueIsVisible(!dialogueIsVisible);
  };

  return (
    <SafeArea>
      <ScreenContainer>
        <HeadingContainer>
          <H1Heading>Check-in Survey</H1Heading>
        </HeadingContainer>

        {/* TODO: replace with user's name*/}
        <BodyText>
          {`Hi, [name], it looks like you've been using our app for a while! Mind filling out a quick check-in survey?
          \n1. On a scale from 1-10, how satisfied are you with your current voice?`}
        </BodyText>

        <Row style={{ marginTop: 20, marginBottom: 30 }}>
          <Icon name="frowno" size={24} color={Colors.lightPurple} />
          <Slider
            style={{ width: 265, height: 40 }}
            minimumValue={1}
            maximumValue={10}
            minimumTrackTintColor={Colors.yellow}
            maximumTrackTintColor={Colors.yellow}
            thumbTintColor={Colors.green}
            step={1}
          />
          <Icon name="smileo" size={24} color={Colors.lightGreen} />
        </Row>

        <BodyText>2. How long have you been voice training?</BodyText>
        <Dropdown
          open={dropdownOpen}
          setOpen={setDropdownOpen}
          value={trainingTime}
          setValue={setTrainingTime}
          items={dropdownItems}
          setItems={setDropdownItems}
        />

        <ButtonContainer>
          <PurpleButton onPress={toSubmissionScreen} text="Submit" />
          <GrayButton onPress={toggleDialogue} text="Quit" />
        </ButtonContainer>
      </ScreenContainer>

      <PopUpModal
        isVisible={dialogueIsVisible}
        title="Are you sure you want to discard this survey?"
        text={`Your participation means a lot to us, and helps us collect data for research and improve the app.`}
        yesOption="Confirm"
        noOption="Cancel"
        onYes={toHomeScreen}
        onNo={toggleDialogue}
      />
    </SafeArea>
  );
}
