import React from 'react';
import styled from 'styled-components/native';
import Colors from '../../../assets/Colors';
import { BodyText } from '../../../assets/Fonts';
import Icon from 'react-native-vector-icons/AntDesign';
import { RightAlignContainer, Row } from '../common/Containers';

const SelectBase = styled.TouchableOpacity`
  border-width: 2px;
  height: 30px;
  padding-vertical: 2px;
  padding-horizontal: 12px;
  margin-top: 23px;
  margin-bottom: 11px;
  border-radius: 7px;
  background-color: ${Colors.darkGray};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

type SelectFieldProps = {
  text: string;
  color: string;
  onPress: () => void;
  disabled?: boolean;
};

export function SelectField({
  text,
  color,
  onPress,
  disabled = false,
}: SelectFieldProps) {
  return (
    <SelectBase
      onPress={onPress}
      style={{ borderColor: color }}
      disabled={disabled}
    >
      <Row>
        <BodyText style={{ color }}>{text}</BodyText>
        <RightAlignContainer>
          <Icon name="right" size={15} color={color} />
        </RightAlignContainer>
      </Row>
    </SelectBase>
  );
}
