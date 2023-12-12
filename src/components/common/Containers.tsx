import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../../assets/Colors';

export const SafeArea = styled(SafeAreaView)`
  background-color: ${Colors.darkGray};
  width: 100%;
  min-height: 100%;
  align-items: center;
  flex: 1;
`;

export const StartContainer = styled.View`
  top: 40%;
`;

export const HeadingContainer = styled.View`
  padding-vertical: 31px;
  align-items: flex-start;
  width: 100%;
`;

export const ScreenContainer = styled.View`
  padding-horizontal: 47px;
  align-items: center;
  min-width: 275px;
  width: 100%;
`;

export const ButtonContainer = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 34px;
`;

export const Column = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
`;

export const ColumnEnd = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const LeftAlignContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
`;

export const RightAlignContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

export const PressableRow = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const CenteredRow = styled(Row)`
  justify-content: center;
`;
