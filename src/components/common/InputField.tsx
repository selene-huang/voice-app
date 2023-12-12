import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { KeyboardTypeOptions, StyleSheet } from 'react-native';
import Colors from '../../../assets/Colors';
import { BodyText } from '../../../assets/Fonts';

type InputFieldProps = {
  label?: string;
  onChange: (text: string) => void;
  value: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  editable?: boolean;
  width?: number;
  multiline?: boolean;
  height?: number;
};

export default function InputField({
  label,
  onChange,
  value,
  secureTextEntry = false,
  keyboardType = 'default',
  editable = true,
  width = 275,
  multiline = false,
  height = 30,
}: InputFieldProps) {
  const [isActive, setIsActive] = useState(false);
  var style = isActive
    ? { ...styles.isActive, width, height }
    : { ...styles.isInactive, width, height };
  var setWidth = { width };

  return (
    <>
      {label ? <BodyText style={setWidth}>{label}</BodyText> : null}
      <TextInput
        onEndEditing={() => {
          setIsActive(false);
        }}
        onFocus={() => setIsActive(true)}
        onChangeText={onChange}
        style={style}
        value={value}
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType={keyboardType}
        returnKeyType="done"
        editable={editable}
        multiline={multiline}
        textAlignVertical="top"
      />
    </>
  );
}

const styles = StyleSheet.create({
  isInactive: {
    borderWidth: 2,
    height: 30,
    paddingVertical: 7,
    paddingHorizontal: 12,
    marginTop: 5,
    marginBottom: 11,
    borderRadius: 7,
    borderColor: Colors.purple,
    backgroundColor: Colors.lightGray,
  },
  isActive: {
    borderWidth: 2,
    height: 30,
    paddingVertical: 7,
    paddingHorizontal: 12,
    marginTop: 5,
    marginBottom: 11,
    borderRadius: 7,
    borderColor: Colors.lightPurple,
    backgroundColor: Colors.white,
  },
});
