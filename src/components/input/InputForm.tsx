import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

interface inputProps {
  placeholder: string;
  onChangeText: (val: string) => void;
  value: string;
}

const InputForm = ({placeholder, onChangeText, value}: inputProps) => {
  const {container, inputStyle} = styles;
  return (
    <View style={container}>
      <TextInput
        keyboardType="number-pad"
        onChangeText={onChangeText}
        value={value}
        style={inputStyle}
        placeholder={placeholder}
        placeholderTextColor={'#888'}
        selectionColor={'#000'}
      />
    </View>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
  },
  inputStyle: {
    height: '100%',
    width: 120,
    backgroundColor: '#FFF',
    borderRadius: 5,
    marginVertical: 10,
    color: '#000',
    fontSize: 18,
    elevation: 5,
  },
});
