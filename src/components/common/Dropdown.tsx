import React, { Dispatch, useState } from 'react';
import { TextInput } from 'react-native';
import { KeyboardTypeOptions, StyleSheet } from 'react-native';
import Colors from '../../../assets/Colors';
import { BodyText } from '../../../assets/Fonts';
import DropDownPicker from 'react-native-dropdown-picker';

type DropdownProps = {
  label?: string;
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  value: any;
  setValue: Dispatch<React.SetStateAction<any>>;
  items: Object[];
  setItems: Dispatch<React.SetStateAction<any[]>>;
  width?: number;
  height?: number;
};

export default function Dropdown({
  label,
  open,
  setOpen,
  value,
  setValue,
  items,
  setItems,
  width = 275,
}: DropdownProps) {
  const style = { ...styles.dropdownStyle, width };
  var setWidth = { width };

  return (
    <>
      {label ? <BodyText style={setWidth}>{label}</BodyText> : null}
      <DropDownPicker
        style={style}
        containerStyle={styles.center}
        dropDownContainerStyle={setWidth}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
    </>
  );
}

const styles = StyleSheet.create({
  dropdownStyle: {
    borderWidth: 2,
    marginTop: 5,
    marginBottom: 11,
    borderRadius: 7,
    borderColor: Colors.lightPurple,
    backgroundColor: Colors.white,
  },
  center: { alignItems: 'center' },
});
