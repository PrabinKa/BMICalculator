import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface userInputsProps {
  title: string;
  value: number;
  unit?: string;
}

const UserInputs = ({title, value, unit}: userInputsProps) => {
  const {container, titleText, valueText} = styles;
  return (
    <View style={container}>
      <Text style={titleText}>{title}:</Text>
      <Text style={valueText}>
        {value}
        {unit}
      </Text>
    </View>
  );
};

export default UserInputs;

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: '35%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    backgroundColor: '#FFF',
    elevation: 2,
    marginTop: 15,
  },
  titleText: {
    color: '#16375F',
    fontSize: 18,
    fontWeight: 'bold',
  },
  valueText: {
    color: '#888',
    fontSize: 18,
    fontWeight: '800',
    marginLeft: 10,
  },
});
