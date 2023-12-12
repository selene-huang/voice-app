import React, { useState } from 'react';
import {
  ScreenContainer,
  HeadingContainer,
  SafeArea,
  ButtonContainer,
  Row,
} from '../../components/common/Containers';
import { BodyText, H1Heading, YellowText } from '../../../assets/Fonts';
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
import Slider from '@react-native-community/slider';
import { MaterialIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/AntDesign';

export default function CheckInSurveyScreen({
  navigation,
}: TrainingStackScreenProps<'CheckInSurvey'>) {
  // TODO: fetch name from database
  const [name, setName] = useState('');
  const [trainingTime, setTrainingTime] = useState('');
  const [dialogueIsVisible, setDialogueIsVisible] = useState(false);

  const toHomeScreen = () => {
    navigation.navigate('Home');
  };

  // TODO: change to dropdown
  const onChangeTrainingTime = (value: string) => setTrainingTime(value);

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
        {/* TODO: replace with dropdown */}
        <InputField value={trainingTime} onChange={onChangeTrainingTime} />

        <ButtonContainer>
          <PurpleButton onPress={toHomeScreen} text="Submit" />
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
