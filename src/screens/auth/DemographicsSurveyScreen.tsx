import React, { useState } from 'react';
import {
  ScreenContainer,
  HeadingContainer,
  SafeArea,
  ButtonContainer,
} from '../../components/common/Containers';
import { BodyText, H1Heading } from '../../../assets/Fonts';
import { BackButton, PurpleButton } from '../../components/common/Buttons';
import InputField from '../../components/common/InputField';
import { AuthStackScreenProps } from '../../navigation/types';
import Dropdown from '../../components/common/Dropdown';
import { View } from 'react-native';

export default function DemographicsSurveyScreen({
  navigation,
}: AuthStackScreenProps<'DemographicsSurvey'>) {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const onChangeAge = (value: string) => setAge(value);
  const onChangeGender = (value: string) => setGender(value);

  // TODO: add regional items
  const [regionDropdownOpen, setRegionDropdownOpen] = useState(false);
  const [region, setRegion] = useState(null);
  const [regionDropdownItems, setRegionDropdownItems] = useState([
    { label: 'TODO', value: 'TODO' },
  ]);

  const [voiceGoalsDropdownOpen, setVoiceGoalsDropdownOpen] = useState(false);
  const [voiceGoals, setVoiceGoals] = useState(null);
  const [voiceGoalsDropdownItems, setVoiceGoalsDropdownItems] = useState([
    { label: 'feminization', value: 'feminization' },
    { label: 'masculinization', value: 'masculinization' },
    { label: 'androgynous', value: 'androgynous' },
  ]);

  const [trainingDropdownOpen, setTrainingDropdownOpen] = useState(false);
  const [trainingTime, setTrainingTime] = useState(null);
  const [trainingDropdownItems, setTrainingDropdownItems] = useState([
    { label: '<1 month', value: '<1 month' },
    { label: '1-3 months', value: '1-3 months' },
    { label: '3-6 months', value: '3-6 months' },
    { label: '6 months-1 year', value: '6 months-1 year' },
    { label: '1-2 years', value: '1-2 years' },
    { label: '>2 years', value: '>2 years' },
  ]);

  const toCollectionPolicy = () => {
    navigation.navigate('DataCollection');
  };

  return (
    <SafeArea>
      <BackButton navigation={navigation} />

      <ScreenContainer>
        <HeadingContainer>
          <H1Heading>{'Demographics Survey'}</H1Heading>
        </HeadingContainer>

        <InputField
          label="Age"
          value={age}
          onChange={onChangeAge}
          keyboardType="numeric"
        />

        <InputField label="Gender" value={gender} onChange={onChangeGender} />

        <View style={{ zIndex: 5 }}>
          <Dropdown
            label="Region"
            open={regionDropdownOpen}
            setOpen={setRegionDropdownOpen}
            value={region}
            setValue={setRegion}
            items={regionDropdownItems}
            setItems={setRegionDropdownItems}
          />
        </View>

        <View style={{ zIndex: 4 }}>
          <Dropdown
            label="Voice Goals"
            open={voiceGoalsDropdownOpen}
            setOpen={setVoiceGoalsDropdownOpen}
            value={voiceGoals}
            setValue={setVoiceGoals}
            items={voiceGoalsDropdownItems}
            setItems={setVoiceGoalsDropdownItems}
          />
        </View>

        <View style={{ zIndex: 3 }}>
          <Dropdown
            label="Time Spent Training"
            open={trainingDropdownOpen}
            setOpen={setTrainingDropdownOpen}
            value={trainingTime}
            setValue={setTrainingTime}
            items={trainingDropdownItems}
            setItems={setTrainingDropdownItems}
          />
        </View>

        <ButtonContainer>
          <PurpleButton onPress={toCollectionPolicy} text="Next" />
        </ButtonContainer>
      </ScreenContainer>
    </SafeArea>
  );
}
