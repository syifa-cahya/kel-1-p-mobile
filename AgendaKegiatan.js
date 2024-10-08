import React from 'react';
import { View, Text, ScrollView, StyleSheet, StatusBar } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default function AgendaKegiatan() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <MaterialIcons name="chevron-left" size={24} color="gray" />
        <View style={styles.location}>
          <Text style={styles.locationText}>Lokasi Anda</Text>
          <Text style={styles.locationName}>Indralaya</Text>
        </View>
        <MaterialIcons name="settings" size={24} color="gray" />
      </View>
      <View style={styles.calendar}>
        <View style={styles.weekDays}>
          {['MIN', 'SEN', 'SEL', 'RAB', 'KAM', 'JUM', 'SAB'].map((day, index) => (
            <Text key={index} style={styles.weekDay}>{day}</Text>
          ))}
        </View>
        <View style={styles.dates}>
          {['28', '29', '30', '1', '2', '3', '4'].map((date, index) => (
            <Text key={index} style={[styles.date, date === '28' && styles.selectedDate]}>{date}</Text>
          ))}
        </View>
      </View>
      <ScrollView style={styles.agenda}>
        <View style={styles.agendaHeader}>
          <Text style={styles.agendaTitle}>Informasi Agenda</Text>
          <View style={styles.agendaFilter}>
            <Text style={styles.agendaFilterText}>Semua (8)</Text>
            <MaterialIcons name="expand-more" size={24} color="green" />
          </View>
        </View>
        <View style={styles.progressBar}></View>
        {[
          { title: 'Kajian Ust Abdul Somad', date: 'Senin, 6 Mei 2024', completed: false },
          { title: 'Buka Bersama Remaja Masjid', date: 'Senin, 29 April 2024', completed: true },
          { title: 'Berbagi Takjil', date: 'Jum’at, 26 April 2024', completed: true },
          { title: 'Buka Bersama Pengurus Masjid', date: 'Jum’at, 26 April 2024', completed: true },
          { title: 'Pesantren Kilat', date: 'Kamis, 25 April 2024', completed: false },
          { title: 'Kajian Ust Hanan Attaki', date: 'Rabu, 24 April 2024', completed: true },
        ].map((item, index) => (
          <View key={index} style={styles.agendaItem}>
            <View>
              <Text style={styles.agendaItemTitle}>{item.title}</Text>
              <View style={styles.agendaItemDate}>
                <FontAwesome name="clock-o" size={14} color="gray" />
                <Text style={styles.agendaItemDateText}>{item.date}</Text>
              </View>
            </View>
            <FontAwesome name="check-circle" size={24} color={item.completed ? 'green' : 'gray'} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  location: {
    alignItems: 'center',
  },
  locationText: {
    fontSize: 12,
    color: 'gray',
  },
  locationName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  calendar: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  weekDays: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  weekDay: {
    flex: 1,
    textAlign: 'center',
    color: 'gray',
  },
  dates: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  selectedDate: {
    color: 'green',
  },
  agenda: {
    flex: 1,
    marginTop: 16,
  },
  agendaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  agendaTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  agendaFilter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  agendaFilterText: {
    color: 'green',
  },
  progressBar: {
    height: 4,
    backgroundColor: 'orange',
    borderRadius: 2,
    marginBottom: 16,
  },
  agendaItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  agendaItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  agendaItemDate: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  agendaItemDateText: {
    marginLeft: 4,
    color: 'gray',
  },
});