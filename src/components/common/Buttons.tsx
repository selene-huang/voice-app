import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import Colors from '../../../assets/Colors';
import { BodyText, ButtonText, YellowText } from '../../../assets/Fonts';
import Icon from 'react-native-vector-icons/AntDesign';

const ButtonBase = styled.TouchableOpacity`
  text-align: center;
  align-items: center;
  border-width: 3px;
  border-radius: 12px;
  width: 265px;
  padding: 7px;
  margin-bottom: 11px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const styles = StyleSheet.create({
  purpleBase: {
    backgroundColor: Colors.purple,
    borderColor: Colors.purple,
  },
  greenBase: {
    backgroundColor: Colors.green,
    borderColor: Colors.green,
  },
  grayBase: {
    backgroundColor: Colors.darkGray,
    borderColor: Colors.yellow,
  },
});

type ButtonProps = {
  onPress: () => void;
  text: string;
  disabled?: boolean;
};

export function PurpleButton({ onPress, text, disabled }: ButtonProps) {
  return (
    <ButtonBase style={styles.purpleBase} onPress={onPress} disabled={disabled}>
      <ButtonText>{text}</ButtonText>
    </ButtonBase>
  );
}

export function GreenButton({ onPress, text, disabled }: ButtonProps) {
  return (
    <ButtonBase style={styles.greenBase} onPress={onPress} disabled={disabled}>
      <ButtonText>{text}</ButtonText>
    </ButtonBase>
  );
}

export function GrayButton({ onPress, text, disabled }: ButtonProps) {
  return (
    <ButtonBase style={styles.grayBase} onPress={onPress} disabled={disabled}>
      <ButtonText>
        <YellowText>{text}</YellowText>
      </ButtonText>
    </ButtonBase>
  );
}

const BackButtonContainer = styled.View`
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
`;

const BackButtonBase = styled.TouchableOpacity`
  text-align: center;
  align-items: center;
  padding: 9px 18px 9px 0px;
  margin-vertical: 5px;
  margin-horizontal: 24px;
`;

type BackButtonProps = {
  navigation: any;
  onPress?: () => void;
};

export function BackButton({ navigation, onPress }: BackButtonProps) {
  return (
    <BackButtonContainer>
      <BackButtonBase
        onPress={() => {
          if (onPress) {
            onPress();
          } else {
            navigation.goBack();
          }
        }}
      >
        <BodyText>
          <Icon name="left" size={15} color={Colors.cream} /> Back
        </BodyText>
      </BackButtonBase>
    </BackButtonContainer>
  );
}

export function QuitButton({ onPress }: BackButtonProps) {
  return (
    <BackButtonContainer>
      <BackButtonBase onPress={onPress}>
        <BodyText>
          <Icon name="left" size={15} color={Colors.cream} /> Quit
        </BodyText>
      </BackButtonBase>
    </BackButtonContainer>
  );
}
