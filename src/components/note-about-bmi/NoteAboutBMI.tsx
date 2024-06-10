import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const NoteAboutBMI = () => {
  const {noteContainer, noteText, nonHighlightedNoteText, highlightedText} =
    styles;

  return (
    <View style={noteContainer}>
      <Text style={noteText}>Note:</Text>
      <Text style={nonHighlightedNoteText}>
        BMI less than <Text style={highlightedText}>18.5</Text> is{' '}
        <Text style={highlightedText}>Underweight</Text>.
      </Text>
      <Text style={nonHighlightedNoteText}>
        BMI between <Text style={highlightedText}>18.5-24.9</Text> is{' '}
        <Text style={highlightedText}>Normal Weight</Text>.
      </Text>
      <Text style={nonHighlightedNoteText}>
        BMI between <Text style={highlightedText}>25.0-29.9</Text> is{' '}
        <Text style={highlightedText}>Overweight</Text>.
      </Text>
      <Text style={nonHighlightedNoteText}>
        BMI greater than <Text style={highlightedText}>30.0</Text> is{' '}
        <Text style={highlightedText}>Obesity</Text>.
      </Text>
    </View>
  );
};

export default NoteAboutBMI;

const styles = StyleSheet.create({
  noteContainer: {
    height: '20%',
    width: '100%',
    backgroundColor: '#FFFDE7',
    borderColor: '#999',
    borderWidth: 2,
    borderRadius: 15,
    marginVertical: 30,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  noteText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FBC02D',
  },
  nonHighlightedNoteText: {
    fontSize: 18,
    color: '#999',
  },
  highlightedText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FBC02D',
  },
});
