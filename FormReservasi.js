import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';

export default function FormReservasi() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <FontAwesome name="chevron-left" size={24} color="#1E90FF" />
        <Text style={styles.backText}>Back</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <FontAwesome name="calendar" size={24} color="#1E90FF" />
          <Text style={styles.infoText}>1 Mei 2024 | 10:30 PM</Text>
        </View>
        <View style={styles.infoItem}>
          <FontAwesome name="users" size={24} color="#1E90FF" />
          <Text style={styles.infoText}>200 Guests</Text>
        </View>
        <View style={styles.infoItem}>
          <Feather name="umbrella" size={24} color="#1E90FF" />
          <Text style={styles.infoText}>Indoor</Text>
        </View>
      </View>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput style={styles.input} value="Yesya Najwa" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone</Text>
          <View style={styles.phoneInputContainer}>
            <Image
              source={{ uri: 'https://storage.googleapis.com/a1aa/image/ULdvsR7zJMIZLZRa5oLOpXac6OwpUA0vfA4C6CuiEVkTeWnTA.jpg' }}
              style={styles.flag}
            />
            <Text style={styles.phoneCode}>+62</Text>
            <TextInput style={styles.phoneInput} value="823 7782 1413" />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email Address (Optional)</Text>
          <TextInput style={styles.input} value="yesyanajwa@gmail.com" />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Reserved Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backText: {
    marginLeft: 8,
    color: '#1E90FF',
    fontWeight: '500',
  },
  infoContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    paddingBottom: 16,
    marginBottom: 16,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoText: {
    marginLeft: 8,
    color: '#4B5563',
  },
  form: {
    width: '100%',
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    color: '#4B5563',
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#FFFFFF',
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#FFFFFF',
  },
  flag: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  phoneCode: {
    color: '#4B5563',
    marginRight: 8,
  },
  phoneInput: {
    flex: 1,
  },
  button: {
    backgroundColor: '#1E90FF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '500',
  },
});