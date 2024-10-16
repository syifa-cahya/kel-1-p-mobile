import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Al-Fatihah</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Al-Fatihah</Text>
        <Text style={styles.cardSubtitle}>The Opening</Text>
        <Text style={styles.cardInfo}>MECCAN - 7 VERSES</Text>
        <Text style={styles.cardArabic}>بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ</Text>
      </View>
      <View style={styles.verseContainer}>
        <View style={styles.verse}>
          <View style={styles.verseNumber}>
            <Text style={styles.verseNumberText}>1</Text>
          </View>
          <View style={styles.verseContent}>
            <View style={styles.verseActions}>
              <TouchableOpacity>
                <FontAwesome name="share-alt" size={24} color="gray" />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome name="play" size={24} color="gray" />
              </TouchableOpacity>
            </View>
            <View style={styles.verseTextContainer}>
              <Text style={styles.verseArabic}>الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ</Text>
              <Text style={styles.verseTranslation}>[All] praise is [due] to Allah, Lord of the worlds -</Text>
            </View>
          </View>
        </View>
        <View style={styles.verse}>
          <View style={styles.verseNumber}>
            <Text style={styles.verseNumberText}>2</Text>
          </View>
          <View style={styles.verseContent}>
            <View style={styles.verseActions}>
              <TouchableOpacity>
                <FontAwesome name="share-alt" size={24} color="gray" />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome name="play" size={24} color="gray" />
              </TouchableOpacity>
            </View>
            <View style={styles.verseTextContainer}>
              <Text style={styles.verseArabic}>الرَّحْمَـٰنِ الرَّحِيمِ</Text>
              <Text style={styles.verseTranslation}>The Entirely Merciful, the Especially Merciful,</Text>
            </View>
          </View>
        </View>
        {/* Add more verses as needed */}
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
    paddingVertical: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#bfdbfe',
    padding: 24,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#4b5563',
  },
  cardInfo: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 8,
  },
  cardArabic: {
    fontSize: 24,
    marginTop: 16,
  },
  verseContainer: {
    paddingHorizontal: 8,
  },
  verse: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  verseNumber: {
    width: 32,
    height: 32,
    backgroundColor: '#bfdbfe',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  verseNumberText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  verseContent: {
    flex: 1,
    marginLeft: 16,
  },
  verseActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  verseTextContainer: {
    alignItems: 'flex-end',
  },
  verseArabic: {
    fontSize: 18,
  },
  verseTranslation: {
    fontSize: 14,
    color: '#4b5563',
  },
});