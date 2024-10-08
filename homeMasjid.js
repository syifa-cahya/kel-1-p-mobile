import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.headerLeft}>
            <FontAwesome name="mosque" size={24} color="white" />
            <View>
              <Text style={styles.headerText}>Assalamualaikum</Text>
              <Text style={styles.headerTitle}>Musdalifa</Text>
            </View>
          </View>
          <View style={styles.headerRight}>
            <FontAwesome name="bell" size={24} color="white" />
            <View style={styles.profileIcon}></View>
          </View>
        </View>
        <View style={styles.headerBottom}>
          <View style={styles.headerBottomContent}>
            <View style={styles.headerBottomLeft}>
              <FontAwesome name="clock-o" size={16} color="gray" />
              <Text style={styles.headerBottomText}>Shalat Ashar</Text>
            </View>
            <View style={styles.headerBottomRight}>
              <FontAwesome name="map-marker" size={16} color="gray" />
              <Text style={styles.headerBottomText}>Lokasi Anda</Text>
            </View>
          </View>
          <View style={styles.headerBottomTime}>
            <Text style={styles.headerTime}>15:06 WIB</Text>
            <Text style={styles.headerLocation}>Indralaya</Text>
          </View>
        </View>
      </View>
      <View style={styles.grid}>
        <View style={styles.gridItem}>
          <FontAwesome name="bell" size={24} color="#9b59b6" />
          <Text>Pengingat</Text>
        </View>
        <View style={styles.gridItem}>
          <FontAwesome name="calendar-check-o" size={24} color="#f1c40f" />
          <Text>Reservasi</Text>
        </View>
        <View style={styles.gridItem}>
          <FontAwesome name="calendar" size={24} color="#9b59b6" />
          <Text>Agenda</Text>
        </View>
        <View style={styles.gridItem}>
          <FontAwesome name="comments" size={24} color="#3498db" />
          <Text>Diskusi</Text>
        </View>
        <View style={styles.gridItem}>
          <FontAwesome name="gift" size={24} color="#e74c3c" />
          <Text>Donasi</Text>
        </View>
        <View style={styles.gridItem}>
          <FontAwesome name="wallet" size={24} color="#2ecc71" />
          <Text>Keuangan</Text>
        </View>
      </View>
      <View style={styles.quran}>
        <View style={styles.quranIcon}>
          <FontAwesome name="moon-o" size={24} color="#3498db" />
        </View>
        <View>
          <Text style={styles.quranText}>Sudah baca Alqur'an? terakhir dibaca</Text>
          <Text style={styles.quranTitle}>QS. AL-FATIHAH : Ayat 1</Text>
        </View>
      </View>
      <View style={styles.liveSection}>
        <Text style={styles.liveTitle}>Kajian LIVE</Text>
        <View style={styles.liveCard}>
          <Image
            source={{ uri: 'https://placehold.co/300x200' }}
            style={styles.liveImage}
          />
          <View style={styles.liveBadge}>
            <Text style={styles.liveBadgeText}>LIVE</Text>
          </View>
          <View style={styles.liveViewers}>
            <Text style={styles.liveViewersText}>12324 penonton</Text>
          </View>
          <View style={styles.liveDescription}>
            <Text>[LIVE] Tabligh akbar di provinsi sumsel bersama ustad adi...</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <FontAwesome name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  header: {
    backgroundColor: '#3498db',
    padding: 16,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 14,
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#e74c3c',
    marginLeft: 8,
  },
  headerBottom: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginTop: 16,
  },
  headerBottomContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerBottomLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerBottomRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerBottomText: {
    color: 'gray',
    marginLeft: 4,
  },
  headerBottomTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  headerTime: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerLocation: {
    fontSize: 16,
  },
  grid: {
    padding: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 16,
  },
  quran: {
    backgroundColor: '#3498db',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
  },
  quranIcon: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 8,
    marginRight: 16,
  },
  quranText: {
    color: 'white',
  },
  quranTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  liveSection: {
    padding: 16,
  },
  liveTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  liveCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    overflow: 'hidden',
    marginTop: 8,
  },
  liveImage: {
    width: '100%',
    height: 200,
  },
  liveBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#e74c3c',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  liveBadgeText: {
    color: 'white',
    fontSize: 12,
  },
  liveViewers: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  liveViewersText: {
    color: 'white',
    fontSize: 12,
  },
  liveDescription: {
    padding: 16,
  },
  footer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  footerButton: {
    backgroundColor: '#3498db',
    padding: 16,
    borderRadius: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});