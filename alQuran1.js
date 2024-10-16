import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <FontAwesome name="chevron-left" size={24} color="gray" />
        <Text style={styles.headerTitle}>Al-Quran</Text>
        <View style={{ width: 24 }} />
      </View>
      <View style={styles.card}>
        <View style={styles.cardIcon}>
          <Image source={{ uri: 'https://placehold.co/24x24' }} style={styles.flagIcon} />
        </View>
        <View style={styles.cardText}>
          <Text style={styles.cardSubtitle}>Sudah baca Alqur'an? terakhir dibaca</Text>
          <Text style={styles.cardTitle}>QS. AL-FATIHAH : Ayat 1</Text>
        </View>
        <FontAwesome name="chevron-right" size={24} color="gray" style={styles.cardChevron} />
      </View>
      <View style={styles.tabs}>
        <Text style={[styles.tab, styles.activeTab]}>Surah</Text>
        <Text style={styles.tab}>Para</Text>
        <Text style={styles.tab}>Halaman</Text>
        <Text style={styles.tab}>Hijb</Text>
      </View>
      <View style={styles.surahList}>
        {surahData.map((surah, index) => (
          <View key={index} style={styles.surahItem}>
            <View style={styles.surahInfo}>
              <View style={styles.surahNumber}>
                <Text style={styles.surahNumberText}>{surah.number}</Text>
              </View>
              <View>
                <Text style={styles.surahName}>{surah.name}</Text>
                <Text style={styles.surahDetails}>{surah.details}</Text>
              </View>
            </View>
            <Text style={styles.surahArabic}>{surah.arabic}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Lanjutkan Membaca</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const surahData = [
  { number: 1, name: 'Al-Fatiha', details: 'MECCAN - 7 VERSES', arabic: 'الفاتحة' },
  { number: 2, name: 'Al-Baqarah', details: 'MEDINIAN - 286 VERSES', arabic: 'البقرة' },
  { number: 3, name: 'Al \'Imran', details: 'MECCAN - 200 VERSES', arabic: 'آل عمران' },
  { number: 4, name: 'An-Nisa', details: 'MECCAN - 176 VERSES', arabic: 'النساء' },
];

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F9FAFB',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0F2FE',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    width: '100%',
  },
  cardIcon: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 8,
    marginRight: 16,
  },
  flagIcon: {
    width: 24,
    height: 24,
  },
  cardText: {
    flex: 1,
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#6B7280',
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  cardChevron: {
    marginLeft: 'auto',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 16,
  },
  tab: {
    fontSize: 14,
    color: '#6B7280',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#3B82F6',
    paddingBottom: 4,
  },
  surahList: {
    width: '100%',
  },
  surahItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  surahInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  surahNumber: {
    backgroundColor: '#E0F2FE',
    borderRadius: 24,
    padding: 8,
    marginRight: 16,
  },
  surahNumberText: {
    color: '#3B82F6',
    fontWeight: '600',
  },
  surahName: {
    fontSize: 14,
    fontWeight: '600',
  },
  surahDetails: {
    fontSize: 12,
    color: '#6B7280',
  },
  surahArabic: {
    color: '#3B82F6',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#3B82F6',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    width: '100%',
    marginTop: 24,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default App;