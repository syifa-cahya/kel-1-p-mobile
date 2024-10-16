import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const GagalRegistrasi = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://storage.googleapis.com/a1aa/image/jffJIztpxgu2skojGFy0dcNEKzxlgf8iKJBFXL1VYEHySuOnA.jpg' }}
          style={styles.image}
        />
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Lantai 2 <Text style={styles.headerTextBlue}>Masjid</Text>
          </Text>
        </View>
        <View style={styles.content}>
          <View style={styles.modal}>
            <FontAwesome name="times-circle" size={64} color="red" style={styles.icon} />
            <Text style={styles.modalTitle}>
              Slot <Text style={styles.modalTitleRed}>Not Found</Text>
            </Text>
            <Text style={styles.modalText}>Yesya Najwa</Text>
            <Text style={styles.modalSubText}>+62 823 7782 1413</Text>
            <View style={styles.infoRow}>
              <FontAwesome name="calendar" size={16} color="blue" style={styles.infoIcon} />
              <Text style={styles.infoText}>1 Mei 2024 | 10:30 PM</Text>
            </View>
            <View style={styles.infoRow}>
              <FontAwesome name="users" size={16} color="blue" style={styles.infoIcon} />
              <Text style={styles.infoText}>200 Guests</Text>
            </View>
            <Text style={styles.modalMessage}>
              Your room failed to book! Please create new reservations for other An-Nabawi mosque rooms with our application
            </Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
  },
  card: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
  },
  header: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  headerTextBlue: {
    color: '#3b82f6',
  },
  content: {
    padding: 20,
  },
  modal: {
    backgroundColor: '#1f2937',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  icon: {
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  modalTitleRed: {
    color: 'red',
  },
  modalText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    marginBottom: 5,
  },
  modalSubText: {
    fontSize: 14,
    color: 'white',
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoIcon: {
    marginRight: 5,
  },
  infoText: {
    fontSize: 14,
    color: 'white',
  },
  modalMessage: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#3b82f6',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;