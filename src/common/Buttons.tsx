import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import Colors from '../../assets/Colors';
import { ButtonText, YellowText } from '../../assets/Fonts';

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
    background: Colors.purple,
    borderColor: Colors.purple,
  },
  greenBase: {
    background: Colors.green,
    borderColor: Colors.green,
  },
  grayBase: {
    background: Colors.darkGray,
    borderColor: Colors.yellow,
  },
});

type ButtonProps = {
  onPress: () => void;
  text: string;
  disabled: boolean;
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
