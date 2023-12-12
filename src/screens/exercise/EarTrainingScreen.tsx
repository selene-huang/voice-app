import React from 'react';
import {
  SafeArea,
  ScreenContainer,
  HeadingContainer,
} from '../../components/common/Containers';
import { BodyText, H1Heading } from '../../../assets/Fonts';
import { TrainingStackScreenProps } from '../../navigation/types';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import { BackButton } from '../../components/common/Buttons';
import { TrainingCard } from '../../components/exercise/TrainingCard';

export default function EarTrainingScreen({
  navigation,
}: TrainingStackScreenProps<'EarTraining'>) {
  const toResonanceComparison = () => {
    // TODO
  };
  const toResonanceRating = () => {
    // TODO
  };
  return (
    <SafeArea>
      <BackButton navigation={navigation} />

      <ScreenContainer>
        <HeadingContainer>
          <H1Heading>{'Ear Training Exercises'}</H1Heading>
        </HeadingContainer>

        <BodyText>Learn to identify voice qualities.</BodyText>

        <ScrollView
          style={{ paddingVertical: 17 }}
          contentContainerStyle={{ alignItems: 'center' }}
        >
          <TrainingCard
            icon={<MaterialIcons name="compare" size={48} />}
            title="Resonance Comparison"
            subtitle="Difficult: Easy"
            onPress={toResonanceComparison}
          />
          <TrainingCard
            icon={<MaterialIcons name="insert-chart" size={48} />}
            title="Resonance Rating"
            subtitle="Difficult: Medium"
            onPress={toResonanceRating}
          />
        </ScrollView>
      </ScreenContainer>
    </SafeArea>
  );
}
