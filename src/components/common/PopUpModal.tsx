import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import Colors from '../../../assets/Colors';
import {
  BodyEmphasis,
  BodyText,
  DarkGrayText,
  MidGrayText,
  PurpleText,
} from '../../../assets/Fonts';
import { CenteredRow } from './Containers';

type PopUpModalProps = {
  isVisible: boolean;
  title?: string;
  text: string;
  yesOption: string;
  noOption?: string;
  onYes: () => void;
  onNo?: () => void;
};

export function PopUpModal({
  isVisible,
  title,
  text,
  yesOption,
  noOption,
  onYes,
  onNo,
}: PopUpModalProps) {
  return (
    <View>
      <Modal isVisible={isVisible} style={styles.center}>
        <View style={styles.modal}>
          <BodyEmphasis>
            <DarkGrayText>{title}</DarkGrayText>
          </BodyEmphasis>
          <BodyText>
            <DarkGrayText>{`${text}\n`}</DarkGrayText>
          </BodyText>

          <CenteredRow>
            <TouchableOpacity onPress={onYes}>
              <BodyText>
                <PurpleText>{yesOption}</PurpleText>
              </BodyText>
            </TouchableOpacity>
            <TouchableOpacity onPress={onNo}>
              <BodyText>
                <MidGrayText>{noOption}</MidGrayText>
              </BodyText>
            </TouchableOpacity>
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
});
