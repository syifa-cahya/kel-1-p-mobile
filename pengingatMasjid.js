import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function pengingatMasjid() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <FontAwesome name="arrow-left" size={24} color="gray" />
        <View style={styles.location}>
          <Text style={styles.locationText}>Lokasi Anda</Text>
          <Text style={styles.locationName}>Indralaya</Text>
        </View>
        <FontAwesome name="cog" size={24} color="gray" />
      </View>
      <View style={styles.days}>
        {['MIN', 'SEN', 'SEL', 'RAB', 'KAM', 'JUM', 'SAB'].map((day, index) => (
          <Text key={index} style={styles.dayText}>{day}</Text>
        ))}
      </View>
      <View style={styles.dates}>
        {['28', '29', '30', '1', '2', '3', '4'].map((date, index) => (
          <Text key={index} style={[styles.dateText, index === 0 && styles.selectedDate]}>{date}</Text>
        ))}
      </View>
      <View style={styles.prayerTimeCard}>
        <View style={styles.prayerTimeHeader}>
          <View>
            <Text style={styles.prayerTimeHeaderText}>OFF</Text>
            <Text style={styles.prayerTimeHeaderText}>Min, 28 April 2024</Text>
          </View>
          <Text style={styles.prayerTimeHeaderText}>01:30:46 Jam menuju Ashar</Text>
        </View>
        <View style={styles.prayerTimeBody}>
          <Text style={styles.prayerTime}>15:05 WIB</Text>
          <Text style={styles.nextPrayerTime}>Waktu Shalat berikutnya</Text>
        </View>
        <Image
          source={{ uri: 'https://storage.googleapis.com/a1aa/image/cZDMQeRNlxwQPi0zXvbUleARRgdmV4Q1qRYnmX3m7L4wswkTA.jpg' }}
          style={styles.mosqueIcon}
        />
      </View>
      <View style={styles.prayerTimes}>
        {[
          { name: 'Imsak', time: '04:09', icon: 'volume-up' },
          { name: 'Shubuh', time: '04:09', icon: 'volume-up' },
          { name: 'Dzuhur', time: '12:10', icon: 'volume-up' },
          { name: 'Ashar', time: '15:05', icon: 'volume-mute', selected: true },
          { name: 'Maghrib', time: '18:01', icon: 'volume-up' },
        ].map((prayer, index) => (
          <View key={index} style={[styles.prayerTimeItem, prayer.selected && styles.selectedPrayerTimeItem]}>
            <Text style={styles.prayerName}>{prayer.name}</Text>
            <View style={styles.prayerTimeInfo}>
              <Text style={[styles.prayerTimeText, prayer.selected && styles.selectedPrayerTimeText]}>{prayer.time}</Text>
              <FontAwesome name={prayer.icon} size={16} color={prayer.selected ? 'green' : 'gray'} style={styles.prayerIcon} />
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
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
    fontWeight: '600',
  },
  days: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  dayText: {
    fontSize: 12,
    color: 'gray',
  },
  dates: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  dateText: {
    fontSize: 14,
  },
  selectedDate: {
    color: 'green',
    fontWeight: '600',
  },
  prayerTimeCard: {
    backgroundColor: '#3b82f6',
    borderRadius: 16,
    padding: 16,
    marginTop: 16,
  },
  prayerTimeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  prayerTimeHeaderText: {
    fontSize: 12,
    color: 'white',
  },
  prayerTimeBody: {
    alignItems: 'center',
    marginTop: 8,
  },
  prayerTime: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
  },
  nextPrayerTime: {
    backgroundColor: 'white',
    color: '#3b82f6',
    borderRadius: 16,
    paddingVertical: 4,
    paddingHorizontal: 16,
    fontSize: 12,
    marginTop: 8,
  },
  mosqueIcon: {
    width: 50,
    height: 50,
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  prayerTimes: {
    marginTop: 16,
  },
  prayerTimeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    borderRadius: 16,
    padding: 8,
    marginTop: 8,
  },
  selectedPrayerTimeItem: {
    backgroundColor: '#d1fae5',
  },
  prayerName: {
    fontSize: 14,
    fontWeight: '600',
  },
  prayerTimeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  prayerTimeText: {
    fontSize: 14,
    color: 'gray',
  },
  selectedPrayerTimeText: {
    color: 'green',
  },
  prayerIcon: {
    marginLeft: 8,
  },
});