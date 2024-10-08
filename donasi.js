import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            source={{ uri: 'https://storage.googleapis.com/a1aa/image/8u4eIC0nyOw7Ha0oAaYImduHrQXfrN059ekvLHF6Tvxm2kJnA.jpg' }}
            style={styles.logo}
          />
        </View>
        <View style={styles.headerCenter}>
          <Text style={styles.greeting}>Assalamualaikum</Text>
          <Text style={styles.title}>Musdalifa</Text>
        </View>
        <View style={styles.headerRight}>
          <FontAwesome name="bell" size={24} color="white" />
          <Image
            source={{ uri: 'https://storage.googleapis.com/a1aa/image/dtSecRThIGSUIi2Z4xffsCj8icE7oL7GCR62hOvlKLyp2kJnA.jpg' }}
            style={styles.avatar}
          />
        </View>
      </View>
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Anda mau berdonasi apa hari ini?"
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.categoryTitle}>Kategori</Text>
        <View style={styles.categories}>
          <Text style={styles.categoryActive}>All</Text>
          <Text style={styles.category}>Kategori 1</Text>
          <Text style={styles.category}>Kategori 2</Text>
          <Text style={styles.category}>Kategori 3</Text>
        </View>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://storage.googleapis.com/a1aa/image/pao9XfztQaT4J6ytCPPTrhBKKJLfIb3DNfTeR7xXKgnAtJTOB.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardCategory}>Kategori 1</Text>
          <Text style={styles.cardTitle}>Bantu Banjir Palembang Kembali Pulih.</Text>
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={[styles.progress, { width: '50%' }]} />
            </View>
            <Text style={styles.progressText}>50%</Text>
          </View>
          <TouchableOpacity style={styles.donateButton}>
            <Text style={styles.donateButtonText}>Donasi Sekarang</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://storage.googleapis.com/a1aa/image/mxo3ebFDu10WZC00TjbNEW1LXeA85diCITxlM49oEsxRbykTA.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardCategory}>Kategori 1</Text>
          <Text style={styles.cardTitle}>Perbaiki Sekolah Rusak di Pelosok.</Text>
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={[styles.progress, { width: '30%' }]} />
            </View>
            <Text style={styles.progressText}>30%</Text>
          </View>
          <TouchableOpacity style={styles.donateButton}>
            <Text style={styles.donateButtonText}>Donasi Sekarang</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  header: {
    backgroundColor: '#3B82F6',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  headerCenter: {
    alignItems: 'center',
  },
  headerRight: {
    position: 'absolute',
    top: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  greeting: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
  },
  searchContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  categories: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  category: {
    color: '#6B7280',
    marginRight: 20,
  },
  categoryActive: {
    color: '#3B82F6',
    fontWeight: '600',
    marginRight: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 15,
  },
  cardCategory: {
    color: '#6B7280',
    fontSize: 14,
    marginBottom: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  progressBar: {
    flex: 1,
    height: 5,
    backgroundColor: '#E5E7EB',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progress: {
    height: 5,
    backgroundColor: '#3B82F6',
  },
  progressText: {
    color: '#6B7280',
    fontSize: 14,
    marginLeft: 10,
  },
  donateButton: {
    backgroundColor: '#3B82F6',
    borderRadius: 25,
    paddingVertical: 10,
    alignItems: 'center',
  },
  donateButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});