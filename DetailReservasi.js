import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const DetailReservasi = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://storage.googleapis.com/a1aa/image/FdAmeFysyOwzNyT3tl1llUbZQQkdoLWhjN2R3ape2AKtd6kTA.jpg' }}
          style={styles.image}
        />
        <TouchableOpacity style={styles.backButton}>
          <FontAwesome name="arrow-left" size={24} color="gray" />
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          Lantai 1 <Text style={styles.highlight}>Masjid</Text>
        </Text>
        <View style={styles.infoRow}>
          <FontAwesome name="mosque" size={24} color="gray" />
          <Text style={styles.infoText}>Masjid An-Nabawi</Text>
        </View>
        <View style={styles.infoRow}>
          <FontAwesome name="map-marker" size={24} color="gray" />
          <Text style={styles.infoText}>Universitas Sriwijaya Indralaya</Text>
          <TouchableOpacity>
            <Text style={styles.linkText}>Get Direction</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infoRow}>
          <FontAwesome name="clock-o" size={24} color="gray" />
          <Text style={styles.infoText}>10:30 AM - 11:00 PM</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>
            Selamat datang di Lantai 1 Masjid An-Nabawi UNSRI, tempat yang menyediakan lingkungan nyaman dan terbaik untuk beribadah, belajar, dan berinteraksi. Dengan desain yang menggabungkan estetika, kenyamanan, dan elemen tradisional, lantai ini dilengkapi dengan ruang utama untuk shalat kolektif, area pembelajaran dengan fasilitas multimedia, serta fasilitas penunjang seperti tempat wudhu dan toilet yang bersih dan nyaman. Dengan semangat keterbukaan dan keramahan, kami mengundang semua individu untuk menemukan kedamaian dan pengembangan spiritual di Lantai 1 Masjid An-Nabawi UNSRI.
            <Text style={styles.linkText}> Read More...</Text>
          </Text>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Date</Text>
            <FontAwesome name="calendar" size={24} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Time</Text>
            <FontAwesome name="clock-o" size={24} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>People</Text>
            <FontAwesome name="user" size={24} color="gray" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.findSlotsButton}>
          <Text style={styles.findSlotsButtonText}>Find Slots</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 200,
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  contentContainer: {
    padding: 16,
    backgroundColor: 'white',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: -16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  highlight: {
    color: '#3B82F6',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  infoText: {
    marginLeft: 8,
    color: '#6B7280',
  },
  linkText: {
    marginLeft: 'auto',
    color: '#3B82F6',
  },
  descriptionContainer: {
    marginTop: 16,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  descriptionText: {
    marginTop: 8,
    color: '#6B7280',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    padding: 12,
    marginHorizontal: 4,
  },
  buttonText: {
    color: '#6B7280',
  },
  findSlotsButton: {
    marginTop: 16,
    backgroundColor: '#3B82F6',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  findSlotsButtonText: {
    color: 'white',
    fontWeight: '600',
  },
});

export default DetailReservasi;