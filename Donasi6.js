import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.title}>Donasi</Text>
          <FontAwesome name="cog" size={24} color="gray" />
        </View>
        <Image
          source={{ uri: 'https://placehold.co/300x150' }}
          style={styles.image}
        />
        <View style={styles.overlay}>
          <FontAwesome name="check-circle" size={48} color="white" style={styles.icon} />
          <Text style={styles.successText}>
            Donasi <Text style={styles.successHighlight}>Berhasil</Text>
          </Text>
          <View style={styles.divider} />
          <View style={styles.dateContainer}>
            <FontAwesome name="calendar" size={24} color="lightblue" />
            <Text style={styles.dateText}>1 Mei 2024 | 10:30 PM</Text>
          </View>
          <Text style={styles.message}>
            Terima kasih sudah melakukan donasi melalui unsri tech! Have a nice day
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 320,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 16,
  },
  overlay: {
    backgroundColor: 'rgba(31, 41, 55, 0.75)',
    borderRadius: 10,
    padding: 24,
    alignItems: 'center',
  },
  icon: {
    marginBottom: 16,
  },
  successText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    marginBottom: 8,
  },
  successHighlight: {
    color: 'lightblue',
  },
  divider: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    width: '100%',
    marginBottom: 16,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  dateText: {
    color: 'white',
    marginLeft: 8,
  },
  message: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 16,
  },
  button: {
    backgroundColor: 'lightblue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
});