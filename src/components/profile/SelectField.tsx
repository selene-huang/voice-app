import React from 'react';
import styled from 'styled-components/native';
import Colors from '../../../assets/Colors';
import { BodyText } from '../../../assets/Fonts';
import Icon from 'react-native-vector-icons/AntDesign';
import { Row } from '../common/Containers';

const SelectBase = styled.TouchableOpacity`
  borderWidth: 2px;
  height: 30px;
  padding-vertical: 7px;
  padding-horizontal: 12px;
  margin-top: 5px,
  margin-bottom: 11px,
  border-radius: 7px,
  backgroundColor: ${Colors.darkGray};
`;

type SelectFieldProps = {
  text: string;
  color: string;
  onPress: () => void;
};

export function SelectField({ text, color, onPress }: SelectFieldProps) {
  return (
    <SelectBase onPress={onPress} style={{ borderColor: color }}>
      <Row>
        <BodyText>{text}</BodyText>
        <Icon name="right" size={15} color={color} />
      </Row>
    </SelectBase>
  );
}
