import React, { useState } from 'react';
import {
  SafeArea,
  ButtonContainer,
  HeadingContainer,
  ScreenContainer,
} from '../../components/common/Containers';
import { BodyText, H1Heading } from '../../../assets/Fonts';
import {
  AuthStackScreenProps,
  TrainingStackScreenProps,
} from '../../navigation/types';
import {
  BackButton,
  GreenButton,
  PurpleButton,
} from '../../components/common/Buttons';
import { RWPGraph } from '../../components/common/RWPGraph';
import { PopUpModal } from '../../components/common/PopUpModal';

// TODO: upon login, navigate to this screen if a voice goal has not yet been set for this user
export default function VoiceDesignScreen({
  navigation,
}: AuthStackScreenProps<'VoiceDesign'>) {
  // TODO: remove dummy data and pass data in instead
  const DUMMY_DATA_1 = [{ resonance: 60, weight: 10, pitch: 569 }];
  const DUMMY_DATA_2 = [{ resonance: 20, weight: 85, pitch: 204 }];

  const [showWeight, setShowWeight] = useState(true);
  const [isModalVisible, setModalIsVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalText, setModalText] = useState('');

  const showXModal = () => {
    setModalTitle('Resonance');
    setModalText('All about resonance! More info coming soon.');
    setModalIsVisible(true);
  };

  const showYModal = () => {
    setModalTitle(showWeight ? 'Weight' : 'Pitch');
    setModalText(
      `All about ${showWeight ? 'weight' : 'pitch'}! More info coming soon.`
    );
    setModalIsVisible(true);
  };

  const closeModal = () => {
    setModalIsVisible(false);
  };

  return (
    <SafeArea>
      <BackButton navigation={navigation} />

      <ScreenContainer>
        <HeadingContainer>
          <H1Heading>Let's get started!</H1Heading>
        </HeadingContainer>

        {/* TODO: replace placeholder text*/}
        <BodyText>
          [encourage users to play around and set goals by finding a voice that
          they like. remind them that this can always be changed later.]
        </BodyText>

        <ButtonContainer>
          <RWPGraph
            type={showWeight ? 'weight' : 'pitch'}
            points={DUMMY_DATA_2}
            openXAxisModal={showXModal}
            openYAxisModal={showYModal}
          />
        </ButtonContainer>

        <ButtonContainer>
          <PurpleButton
            text="Save"
            onPress={() => {
              /* TODO: save to database */
            }}
          />
          <GreenButton
            text={`View Resonance v. ${showWeight ? 'Pitch' : 'Weight'}`}
            onPress={() => {
              setShowWeight(!showWeight);
            }}
          />
        </ButtonContainer>

        <PopUpModal
          isVisible={isModalVisible}
          title={modalTitle}
          text={modalText}
          yesOption="Close"
          onYes={closeModal}
        />
      </ScreenContainer>
    </SafeArea>
  );
}
