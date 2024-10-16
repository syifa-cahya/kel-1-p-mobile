import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function SuccessRegistrasi() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Lantai 1 <Text style={styles.headerTextBlue}>Masjid</Text>
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://storage.googleapis.com/a1aa/image/OFMFl7yAVRrXDNLo3CxMHl6u2HW1XFocachaBm7qHd3Rx15E.jpg' }}
          style={styles.image}
        />
        <View style={styles.overlay}>
          <View style={styles.card}>
            <FontAwesome name="check-circle" size={40} color="gray" style={styles.icon} />
            <Text style={styles.title}>
              Booked Rooms <Text style={styles.titleBlue}>Succesfully</Text>
            </Text>
            <Text style={styles.name}>Yesya Najwa</Text>
            <Text style={styles.phone}>+62 823 7782 1413</Text>
            <View style={styles.infoContainer}>
              <FontAwesome name="calendar" size={20} color="gray" style={styles.infoIcon} />
              <Text style={styles.infoText}>1 Mei 2024 | 10:30 PM</Text>
            </View>
            <View style={styles.infoContainer}>
              <FontAwesome name="users" size={20} color="gray" style={styles.infoIcon} />
              <Text style={styles.infoText}>200 Guests</Text>
            </View>
            <Text style={styles.message}>
              Your room is booked! Thank you for making a reservation via our application, see you at the An-Nabawi Unsri Indralaya
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginBottom: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '500',
  },
  headerTextBlue: {
    color: '#1d4ed8',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    maxWidth: 400,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 24,
    borderRadius: 8,
    alignItems: 'center',
    width: '90%',
  },
  icon: {
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  titleBlue: {
    color: '#1d4ed8',
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  phone: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoIcon: {
    marginRight: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#6b7280',
  },
  message: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#1d4ed8',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});