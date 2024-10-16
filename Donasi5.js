import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [passcode, setPasscode] = useState(['', '', '', '', '']);

  const handlePress = (num) => {
    const newPasscode = [...passcode];
    const index = newPasscode.findIndex((item) => item === '');
    if (index !== -1) {
      newPasscode[index] = num;
      setPasscode(newPasscode);
    }
  };

  const handleDelete = () => {
    const newPasscode = [...passcode];
    const index = newPasscode.findIndex((item) => item === '');
    if (index === -1) {
      newPasscode[4] = '';
    } else if (index > 0) {
      newPasscode[index - 1] = '';
    }
    setPasscode(newPasscode);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </View>
      <Text style={styles.title}>Passcode</Text>
      <Text style={styles.subtitle}>Enter Your Passcode to Proceed the Payment</Text>
      <TouchableOpacity>
        <Text style={styles.forgotPasscode}>Forgot passcode?</Text>
      </TouchableOpacity>
      <View style={styles.passcodeContainer}>
        {passcode.map((digit, index) => (
          <View key={index} style={styles.passcodeBox}>
            <Text style={styles.passcodeText}>{digit}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.enterButton}>
        <Text style={styles.enterButtonText}>Enter</Text>
      </TouchableOpacity>
      <View style={styles.keyboardContainer}>
        <Text style={styles.fromMessages}>From Messages</Text>
        <Text style={styles.messageCode}>241356</Text>
        <View style={styles.keyboard}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
            <TouchableOpacity key={num} style={styles.key} onPress={() => handlePress(num.toString())}>
              <Text style={styles.keyText}>{num}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.key} onPress={handleDelete}>
            <Ionicons name="backspace" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a202c',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#718096',
    marginBottom: 16,
  },
  forgotPasscode: {
    color: '#4299e1',
    marginBottom: 24,
  },
  passcodeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  passcodeBox: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: '#cbd5e0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  passcodeText: {
    fontSize: 24,
    color: '#1a202c',
  },
  enterButton: {
    width: '100%',
    paddingVertical: 12,
    backgroundColor: '#4299e1',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 24,
  },
  enterButtonText: {
    fontSize: 18,
    color: 'white',
  },
  keyboardContainer: {
    width: '100%',
    backgroundColor: '#f7fafc',
    padding: 16,
    alignItems: 'center',
  },
  fromMessages: {
    fontSize: 16,
    color: '#718096',
    marginBottom: 8,
  },
  messageCode: {
    fontSize: 24,
    color: '#1a202c',
    marginBottom: 16,
  },
  keyboard: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  key: {
    width: '30%',
    paddingVertical: 16,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#cbd5e0',
    alignItems: 'center',
    marginBottom: 8,
  },
  keyText: {
    fontSize: 24,
    color: '#1a202c',
  },
});