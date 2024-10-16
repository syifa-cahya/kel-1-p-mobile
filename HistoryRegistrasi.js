import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const HistoryRegistrasi = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <FontAwesome name="chevron-left" size={24} color="black" />
        <Text style={styles.headerText}>History</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Lantai 1 Masjid</Text>
          <Text style={styles.cardTime}>2 hrs ago</Text>
        </View>
        <Text style={styles.statusReserved}>Reserved</Text>
        <View style={styles.cardRow}>
          <View style={styles.cardRowLeft}>
            <FontAwesome name="calendar" size={16} color="gray" />
            <Text style={styles.cardRowText}>1 Mei 2024 | 10:30 PM</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.cancelText}>Cancel Booking</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardRow}>
          <View style={styles.cardRowLeft}>
            <FontAwesome name="users" size={16} color="gray" />
            <Text style={styles.cardRowText}>200 Guests</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.editText}>Edit Booking</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardRow}>
          <FontAwesome name="umbrella" size={16} color="gray" />
          <Text style={styles.cardRowText}>Indoor</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Lantai 3 Masjid</Text>
          <Text style={styles.cardTime}>4 Days ago</Text>
        </View>
        <Text style={styles.statusCancelled}>Cancelled</Text>
        <View style={styles.cardRow}>
          <FontAwesome name="calendar" size={16} color="gray" />
          <Text style={styles.cardRowText}>27 April 2024 | 16:30 PM</Text>
        </View>
        <View style={styles.cardRow}>
          <FontAwesome name="users" size={16} color="gray" />
          <Text style={styles.cardRowText}>50 Guests</Text>
        </View>
        <View style={styles.cardRow}>
          <FontAwesome name="umbrella" size={16} color="gray" />
          <Text style={styles.cardRowText}>Outdoor</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Halaman Luar Masjid</Text>
          <Text style={styles.cardTime}>10 Days ago</Text>
        </View>
        <Text style={styles.statusCompleted}>Completed</Text>
        <View style={styles.cardRow}>
          <FontAwesome name="calendar" size={16} color="gray" />
          <Text style={styles.cardRowText}>17 April 2024 | 08:00 AM</Text>
        </View>
        <View style={styles.cardRow}>
          <FontAwesome name="users" size={16} color="gray" />
          <Text style={styles.cardRowText}>500 Guests</Text>
        </View>
        <View style={styles.cardRow}>
          <FontAwesome name="umbrella" size={16} color="gray" />
          <Text style={styles.cardRowText}>Outdoor</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardTime: {
    fontSize: 14,
    color: 'gray',
  },
  statusReserved: {
    color: '#ef4444',
    fontWeight: 'bold',
  },
  statusCancelled: {
    color: '#ef4444',
    fontWeight: 'bold',
  },
  statusCompleted: {
    color: '#10b981',
    fontWeight: 'bold',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  cardRowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardRowText: {
    marginLeft: 8,
    color: 'gray',
  },
  cancelText: {
    color: '#ef4444',
  },
  editText: {
    color: '#10b981',
  },
});

export default HistoryRegistrasi;