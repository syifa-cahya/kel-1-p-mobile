import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <FontAwesome name="chevron-left" size={24} color="gray" />
        <Text style={styles.headerText}>
          Lantai 2 <Text style={styles.headerTextBlue}>Masjid</Text>
        </Text>
        <View />
      </View>
      <Image
        source={{ uri: 'https://storage.googleapis.com/a1aa/image/Pd8y44OtwRK1B9fIW76NdaykBtFryv661XHtNfaNsMMdoanTA.jpg' }}
        style={styles.image}
      />
      <View style={styles.overlayContainer}>
        <View style={styles.overlay}>
          <FontAwesome name="times-circle" size={64} color="red" />
          <Text style={styles.overlayTitle}>
            Slot <Text style={styles.overlayTitleRed}>Not Found</Text>
          </Text>
          <Text style={styles.overlayText}>Yesya Najwa</Text>
          <Text style={styles.overlayText}>+62 823 7782 1413</Text>
          <View style={styles.infoContainer}>
            <FontAwesome name="calendar" size={24} color="white" />
            <Text style={styles.infoText}>1 Mei 2024 | 10:30 PM</Text>
          </View>
          <View style={styles.infoContainer}>
            <FontAwesome name="users" size={24} color="white" />
            <Text style={styles.infoText}>200 Guests</Text>
          </View>
          <Text style={styles.overlayMessage}>
            Your room failed to book! Please create new reservations for other An-Nabawi mosque rooms with our application
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
  },
  headerTextBlue: {
    color: '#3b82f6',
  },
  image: {
    width: '100%',
    height: 200,
  },
  overlayContainer: {
    position: 'relative',
    marginTop: -100,
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(31, 41, 55, 0.9)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '90%',
  },
  overlayTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    marginTop: 10,
  },
  overlayTitleRed: {
    color: 'red',
  },
  overlayText: {
    color: 'white',
    marginTop: 5,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  infoText: {
    color: 'white',
    marginLeft: 10,
  },
  overlayMessage: {
    color: 'white',
    marginTop: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#3b82f6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
