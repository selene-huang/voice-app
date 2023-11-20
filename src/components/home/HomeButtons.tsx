import React from 'react';
import styled from 'styled-components/native';
import Colors from '../../../assets/Colors';
import { ButtonText } from '../../../assets/Fonts';
import { MaterialIcons } from '@expo/vector-icons';
import { CenteredRow } from '../common/Containers';

const HomeButtonBase = styled.TouchableOpacity`
  text-align: center;
  align-items: center;
  border-radius: 24px;
  width: 265px;
  padding: 11px;
  margin-bottom: 20px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

type HomeButtonProps = {
  color: 'purple' | 'green' | 'lightGreen' | 'yellow';
  onPress: () => void;
  text: string;
  icon?: 'hearing' | 'fitness-center' | 'mic' | 'person';
  disabled?: boolean;
};

export function HomeButton({
  color,
  icon,
  onPress,
  text,
  disabled,
}: HomeButtonProps) {
  var baseStyle;
  var textColor;
  switch (color) {
    case 'yellow':
      baseStyle = { backgroundColor: Colors.yellow };
      textColor = Colors.darkGray;
      break;
    case 'green':
      baseStyle = { backgroundColor: Colors.green };
      textColor = Colors.cream;
      break;
    case 'lightGreen':
      baseStyle = { backgroundColor: Colors.lightGreen };
      textColor = Colors.cream;
      break;
    default:
      baseStyle = { backgroundColor: Colors.purple };
      textColor = Colors.cream;
  }

  return (
    <HomeButtonBase style={baseStyle} onPress={onPress} disabled={disabled}>
      <CenteredRow>
        {icon ? (
          <MaterialIcons name={icon} size={24} color={textColor} />
        ) : null}
        <ButtonText style={{ color: textColor }}>{`  ${text}`}</ButtonText>
      </CenteredRow>
    </HomeButtonBase>
  );
}
