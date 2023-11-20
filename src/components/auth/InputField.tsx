import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { KeyboardTypeOptions, StyleSheet } from 'react-native';
import Colors from '../../../assets/Colors';

type InputFieldProps = {
  onChange: (text: string) => void;
  value: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  editable?: boolean;
};

export default function InputField({
  onChange,
  value,
  secureTextEntry = false,
  keyboardType = 'default',
  editable = true,
}: InputFieldProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <TextInput
      onEndEditing={() => {
        setIsActive(false);
      }}
      onFocus={() => setIsActive(true)}
      onChangeText={onChange}
      style={isActive ? styles.isActive : styles.isInactive}
      value={value}
      secureTextEntry={secureTextEntry}
      autoCorrect={false}
      autoCapitalize="none"
      keyboardType={keyboardType}
      returnKeyType="done"
      editable={editable}
    />
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
