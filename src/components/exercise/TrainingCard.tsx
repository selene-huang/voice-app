import React, { Component, ReactNode } from 'react';
import styled from 'styled-components/native';
import Colors from '../../../assets/Colors';
import { BodySubtext, ButtonText, H2Heading } from '../../../assets/Fonts';
import { MaterialIcons } from '@expo/vector-icons';
import { CenteredRow, Row } from '../common/Containers';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

type TrainingCardProps = {
  icon?: ReactNode;
  title: string;
  subtitle: string;
  onPress: () => void;
  disabled?: boolean;
};

export function TrainingCard({
  icon,
  title,
  subtitle,
  onPress,
  disabled,
}: TrainingCardProps) {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <LinearGradient
        start={{ x: 0.4999, y: 0.5 }}
        end={{ x: 0.5, y: 0.5 }}
        colors={[Colors.purple, Colors.cream]}
        style={styles.gradient}
      >
        <Row>
          <View style={styles.iconHalf}>{icon ? icon : null}</View>
          <View style={styles.half}>
            <H2Heading style={{ color: Colors.black }}>{title}</H2Heading>
            <BodySubtext style={{ color: Colors.black }}>
              {subtitle}
            </BodySubtext>
          </View>
        </Row>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  gradient: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    height: 104,
    width: 265,
    marginBottom: 20,
  },
  iconHalf: {
    width: '50%',
    padding: 11,
    alignItems: 'center',
  },
  half: {
    width: '50%',
    padding: 11,
  },
});
