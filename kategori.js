import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function kategori() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Assalamualaikum</Text>
          <Text style={styles.title}>Musdalifa</Text>
        </View>
        <View style={styles.icons}>
          <FontAwesome name="search" size={24} color="white" />
          <FontAwesome name="bell" size={24} color="white" style={styles.icon} />
          <FontAwesome name="user-circle" size={24} color="white" />
        </View>
      </View>
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Cari permasalahan yang serupa"
          placeholderTextColor="gray"
        />
      </View>
      <TouchableOpacity style={styles.askButton}>
        <Text style={styles.askButtonText}>Mulai Bertanya</Text>
      </TouchableOpacity>
      <View style={styles.filterContainer}>
        <View style={styles.filterHeader}>
          <TouchableOpacity>
            <FontAwesome name="arrow-left" size={24} color="blue" />
          </TouchableOpacity>
          <Text style={styles.filterTitle}>Filter Diskusi</Text>
        </View>
        <ScrollView>
          <View style={styles.filterOption}>
            <TouchableOpacity style={styles.radioButton} />
            <Text style={styles.filterTextActive}>Semua diskusi</Text>
          </View>
          <View style={styles.filterOption}>
            <TouchableOpacity style={styles.radioButton} />
            <Text style={styles.filterText}>Pertanyaan saya</Text>
          </View>
          <View style={styles.filterOption}>
            <TouchableOpacity style={styles.radioButton} />
            <Text style={styles.filterText}>Partisipasi saya</Text>
          </View>
          <View style={styles.filterOption}>
            <TouchableOpacity style={styles.radioButton} />
            <Text style={styles.filterText}>Jawaban saya</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.filterOption}>
            <TouchableOpacity style={styles.radioButton} />
            <Text style={styles.filterText}>Diskusi sudah selesai</Text>
          </View>
          <View style={styles.filterOption}>
            <TouchableOpacity style={styles.radioButton} />
            <Text style={styles.filterText}>Diskusi belum selesai</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.filterOption}>
            <TouchableOpacity style={styles.radioButton} />
            <Text style={styles.filterText}>Diskusi terlama</Text>
          </View>
          <View style={styles.filterOption}>
            <TouchableOpacity style={styles.radioButton} />
            <Text style={styles.filterText}>Diskusi terbaru</Text>
          </View>
          <View style={styles.filterOption}>
            <TouchableOpacity style={styles.radioButton} />
            <Text style={styles.filterText}>Belum ada balasan</Text>
          </View>
        </ScrollView>
      </View>
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
    backgroundColor: '#3b82f6',
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 16,
    marginTop: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: 'gray',
  },
  askButton: {
    backgroundColor: '#f59e0b',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 16,
  },
  askButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  filterContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  filterHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  filterTitle: {
    marginLeft: 16,
    fontSize: 18,
    fontWeight: '600',
  },
  filterOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginRight: 8,
  },
  filterText: {
    fontSize: 16,
    color: 'black',
  },
  filterTextActive: {
    fontSize: 16,
    color: '#3b82f6',
  },
  separator: {
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 8,
  },
});