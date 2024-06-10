import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface buttonProps {
  children: string;
  onPress: () => void;
}

const Button = ({children, onPress}: buttonProps) => {
  const {buttonStyle, textButton} = styles;
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress} style={buttonStyle}>
      <Text style={textButton}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#16375F',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 30,
    paddingVertical: 12,
  },
  textButton: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});
