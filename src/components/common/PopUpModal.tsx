import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import Colors from '../../../assets/Colors';
import {
  BodyEmphasis,
  BodySubtext,
  BodyText,
  CenterText,
  DarkGrayText,
  LightGrayText,
  MidGrayText,
  PurpleText,
  RedText,
} from '../../../assets/Fonts';
import {
  CenteredRow,
  LeftAlignContainer,
  RightAlignContainer,
  Row,
} from './Containers';
import InputField from './InputField';

type PopUpModalProps = {
  isVisible: boolean;
  title?: string;
  text: string;
  yesOption: string;
  noOption?: string;
  onYes: () => void;
  onNo?: () => void;
  input?: string;
  onInputChange?: (text: string) => void;
  errorText?: string;
};

export function PopUpModal({
  isVisible,
  title,
  text,
  yesOption,
  noOption,
  onYes,
  onNo,
  input,
  onInputChange,
  errorText = '',
}: PopUpModalProps) {
  return (
    <View>
      <Modal isVisible={isVisible} style={styles.center}>
        <View style={styles.modal}>
          <CenterText style={styles.bottomSpace}>
            <BodyEmphasis>
              <DarkGrayText>{title}</DarkGrayText>
            </BodyEmphasis>
          </CenterText>

          <BodyText>
            <DarkGrayText>{`${text}`}</DarkGrayText>
          </BodyText>
          {input !== undefined && onInputChange ? (
            <>
              <InputField value={input} onChange={onInputChange} width={240} />
              <BodySubtext>
                <RedText>{errorText}</RedText>
              </BodySubtext>
            </>
          ) : null}
          <BodyText style={styles.bottomSpace} />

          <CenteredRow>
            <LeftAlignContainer style={{ marginLeft: 20 }}>
              <TouchableOpacity onPress={onYes}>
                <BodyText>
                  <PurpleText>{yesOption}</PurpleText>
                </BodyText>
              </TouchableOpacity>
            </LeftAlignContainer>

            <BodyText selectable={false}>
              <LightGrayText>|</LightGrayText>
            </BodyText>

            <RightAlignContainer style={{ marginRight: 20 }}>
              <TouchableOpacity onPress={onNo}>
                <BodyText>
                  <MidGrayText>{noOption}</MidGrayText>
                </BodyText>
              </TouchableOpacity>
            </RightAlignContainer>
          </CenteredRow>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { justifyContent: 'center', alignItems: 'center' },
  modal: {
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 15,
    width: 275,
  },
  bottomSpace: { marginBottom: 10 },
});
