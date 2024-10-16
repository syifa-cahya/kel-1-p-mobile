import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://storage.googleapis.com/a1aa/image/lrAdYHJWIaZ6KB2GibGhaV8fE5gXspYAmYf8fv3FfGRbcqdOB.jpg' }}
            style={styles.image}
          />
          <View style={styles.header}>
            <Text style={styles.headerText}>
              Lantai 1 <Text style={styles.headerTextBlue}>Masjid</Text>
            </Text>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.iconContainer}>
            <View style={styles.iconBackground}>
              <FontAwesome name="check" size={24} color="gray" />
            </View>
          </View>
          <Text style={styles.title}>
            Booked Rooms <Text style={styles.titleBlue}>Successfully</Text>
          </Text>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Yesya Najwa</Text>
            <Text style={styles.infoSubText}>+62 823 7782 1413</Text>
          </View>
          <View style={styles.infoRow}>
            <FontAwesome name="calendar" size={20} color="white" />
            <Text style={styles.infoRowText}>1 Mei 2024 | 10:30 PM</Text>
          </View>
          <View style={styles.infoRow}>
            <FontAwesome name="users" size={20} color="white" />
            <Text style={styles.infoRowText}>200 Guests</Text>
          </View>
          <Text style={styles.footerText}>
            Your room is booked! Thank you for making a reservation via our application, see you at the An-Nabawi Unsri Indralaya
          </Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
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
    padding: 16,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 200,
  },
  header: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#1f2937',
  },
  headerTextBlue: {
    color: '#3b82f6',
  },
  content: {
    padding: 16,
    backgroundColor: 'rgba(31, 41, 55, 0.75)',
    borderRadius: 8,
    margin: 16,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  iconBackground: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 8,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
    marginBottom: 8,
  },
  titleBlue: {
    color: '#3b82f6',
  },
  infoContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  infoText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
  infoSubText: {
    fontSize: 14,
    color: 'white',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  infoRowText: {
    fontSize: 14,
    color: 'white',
    marginLeft: 8,
  },
  footerText: {
    textAlign: 'center',
    fontSize: 14,
    color: 'white',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#3b82f6',
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default App;
