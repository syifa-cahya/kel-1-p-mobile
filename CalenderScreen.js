import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const CalendarScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <FontAwesome name="chevron-left" size={24} color="gray" />
        <Text style={styles.time}>9:41</Text>
        <FontAwesome name="cog" size={24} color="gray" />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.month}>April</Text>
        <Text style={styles.year}>2024</Text>
      </View>
      <View style={styles.weekdays}>
        {['MIN', 'SEN', 'SEL', 'RAB', 'KAM', 'JUM', 'SAB'].map((day, index) => (
          <Text key={index} style={styles.weekday}>{day}</Text>
        ))}
      </View>
      <View style={styles.days}>
        {Array.from({ length: 30 }, (_, i) => i + 1).map((day, index) => (
          <View key={index} style={[styles.day, day === 28 ? styles.selectedDay : null]}>
            <Text style={styles.dayText}>{day}</Text>
          </View>
        ))}
      </View>
      <View style={styles.divider} />
      <View style={styles.events}>
        {[
          { title: 'Tahun Baru Hijriyah', subtitle: 'MUHARRAM 1 • 1445 AH', date: '19 JULI 2023' },
          { title: 'Lailat al Miraj', subtitle: 'RAJAB 27 • 1445 AH', date: '8 FEB 2024' },
          { title: 'Ramadhan', subtitle: 'RAMADHAN 1 • 1445 AH', date: '12 MAR 2024' },
          { title: 'Idul Fitri', subtitle: 'SHAWWAL 1 • 1445 AH', date: '10 APR 2024', dot: true },
          { title: 'Waqf Al Arafa Hajj', subtitle: 'DHULHIJJAH 9 • 1445 AH', date: '16 JUN 2024' },
          { title: 'Idul Adha', subtitle: 'DHUL HIJJAH 10 • 1445 AH', date: '17 JUN 2024', dot: true },
        ].map((event, index) => (
          <View key={index} style={styles.event}>
            <View>
              <Text style={styles.eventTitle}>
                {event.title} {event.dot && <Text style={styles.dot}>•</Text>}
              </Text>
              <Text style={styles.eventSubtitle}>{event.subtitle}</Text>
            </View>
            <Text style={styles.eventDate}>{event.date}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  time: {
    color: 'gray',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  month: {
    fontSize: 18,
    fontWeight: '500',
  },
  year: {
    color: 'gray',
  },
  weekdays: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  weekday: {
    color: 'gray',
    textAlign: 'center',
    flex: 1,
  },
  days: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  day: {
    width: '13%',
    alignItems: 'center',
    marginBottom: 8,
  },
  selectedDay: {
    backgroundColor: 'lightgreen',
    borderRadius: 50,
  },
  dayText: {
    padding: 8,
  },
  divider: {
    height: 1,
    backgroundColor: 'gray',
    marginBottom: 16,
  },
  events: {
    marginBottom: 16,
  },
  event: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  eventTitle: {
    color: 'blue',
    fontWeight: '500',
  },
  eventSubtitle: {
    color: 'gray',
    fontSize: 12,
  },
  eventDate: {
    color: 'gray',
  },
  dot: {
    color: 'red',
  },
});

export default CalendarScreen;
