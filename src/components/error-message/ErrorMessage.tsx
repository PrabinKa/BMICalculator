import React from 'react';
import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';

interface errorMessageProps {
  isVisible: boolean;
  message: string;
  onClose: () => void;
}

const ErrorMessage = ({isVisible, message, onClose}: errorMessageProps) => {
  const {
    modalContainer,
    modalContent,
    modalTitle,
    modalMessage,
    closeButton,
    closeButtonText,
  } = styles;
  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View style={modalContainer}>
        <View style={modalContent}>
          <Text style={modalTitle}>Error !</Text>
          <Text style={modalMessage}>{message}</Text>
          <TouchableOpacity style={closeButton} onPress={onClose}>
            <Text style={closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ErrorMessage;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 10,
    backgroundColor: '#FFF',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FF0000',
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: 20,
    color: '#16375F',
  },
  closeButton: {
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#00CC00',
  },
  closeButtonText: {
    fontWeight: 'bold',
    color: '#FFF',
  },
});
