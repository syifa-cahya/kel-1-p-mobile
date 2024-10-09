import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Diskusi() {
  return (

    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.headerLeft}>
            <Image
              source={{ uri: 'https://storage.googleapis.com/a1aa/image/zfjipnsd8wQmPKxZVyfOoeQMJBdALiCp9Xf7TVn8LozSFETOB.jpg' }}
              style={styles.logo}
            />
            <Text style={styles.headerTitle}>Assalamualaikum</Text>
          </View>
          <View style={styles.headerRight}>
            <FontAwesome name="search" size={24} color="white" />
            <Image
              source={{ uri: 'https://storage.googleapis.com/a1aa/image/ylC50oIEWXpefUGstzORhjYJifdhvvmqlX13coXTV0QlCiJnA.jpg' }}
              style={styles.avatar}
            />
          </View>
        </View>
        <Text style={styles.headerSubtitle}>Musdalifa</Text>
        <View style={styles.searchContainer}>
          <FontAwesome name="search" size={20} color="gray" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Cari permasalahan yang serupa"
          />
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.askButton}>
            <Text style={styles.askButtonText}>Mulai Bertanya</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <FontAwesome name="sliders" size={20} color="gray" />
            <Text style={styles.filterButtonText}>Filter</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.filterText}>Filter berdasarkan: <Text style={styles.filterTextBold}>Semua diskusi</Text></Text>
        <View style={styles.discussionContainer}>
          <View style={styles.discussionCard}>
            <View style={styles.discussionHeader}>
              <Image
                source={{ uri: 'https://storage.googleapis.com/a1aa/image/ylC50oIEWXpefUGstzORhjYJifdhvvmqlX13coXTV0QlCiJnA.jpg' }}
                style={styles.discussionAvatar}
              />
              <View style={styles.discussionInfo}>
                <Text style={styles.discussionName}>Ervalsa Dwi Nanda</Text>
                <Text style={styles.discussionTime}>2 hari yang lalu</Text>
              </View>
            </View>
            <Text style={styles.discussionTitle}>Bagaimana cara kalian meningkatkan kesadaran diri untuk solat lima waktu?</Text>
            <Text style={styles.discussionText}>Halo teman-teman semuanya. Saya punya pertanyaan. Jadi, saya selama kuliah merantau sendirian. Saya merasakan semenjak...</Text>
            <View style={styles.discussionFooter}>
              <FontAwesome name="comment-alt" size={16} color="gray" />
              <Text style={styles.discussionComments}>46</Text>
            </View>
          </View>
          <View style={styles.discussionCard}>
            <View style={styles.discussionHeader}>
              <Image
                source={{ uri: 'https://storage.googleapis.com/a1aa/image/ylC50oIEWXpefUGstzORhjYJifdhvvmqlX13coXTV0QlCiJnA.jpg' }}
                style={styles.discussionAvatar}
              />
              <View style={styles.discussionInfo}>
                <Text style={styles.discussionName}>Ervalsa Dwi Nanda</Text>
                <Text style={styles.discussionTime}>2 hari yang lalu</Text>
              </View>
            </View>
            <Text style={styles.discussionTitle}>Mendirikan shalat tahajud tapi belum tidur, sahkah?</Text>
            <Text style={styles.discussionText}>Assalamualaikum, izin bertanya. saya sering begadang sampai subuh. Terkadang saya terpikir untuk shalat tahajud. Apakah sah melaksanakan shalat...</Text>
            <View style={styles.discussionFooter}>
              <FontAwesome name="comment-alt" size={16} color="gray" />
              <Text style={styles.discussionComments}>1</Text>
            </View>
          </View>
          <View style={styles.discussionCard}>
            <View style={styles.discussionHeader}>
              <Image
                source={{ uri: 'https://storage.googleapis.com/a1aa/image/ylC50oIEWXpefUGstzORhjYJifdhvvmqlX13coXTV0QlCiJnA.jpg' }}
                style={styles.discussionAvatar}
              />
              <View style={styles.discussionInfo}>
                <Text style={styles.discussionName}>Ervalsa Dwi Nanda</Text>
                <Text style={styles.discussionTime}>2 hari yang lalu</Text>
              </View>
            </View>
            <Text style={styles.discussionTitle}>Bagaimana cara kalian meningkat</Text>
          </View>
        </View>
        <View style={styles.pagination}>
          <TouchableOpacity style={styles.pageButtonActive}>
            <Text style={styles.pageButtonTextActive}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pageButton}>
            <Text style={styles.pageButtonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pageButton}>
            <Text style={styles.pageButtonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pageButton}>
            <Text style={styles.pageButtonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pageButton}>
            <Text style={styles.pageButtonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pageButton}>
            <Text style={styles.pageButtonText}>6</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: '#2563eb',
    padding: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
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
  logo: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 8,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: 8,
  },
  headerSubtitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
    marginTop: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  content: {
    padding: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  askButton: {
    backgroundColor: '#fbbf24',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 25,
  },
  askButtonText: {
    color: 'white',
    fontWeight: '600',
  },
  filterButton: {
    backgroundColor: '#e5e7eb',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterButtonText: {
    color: '#4b5563',
    fontWeight: '600',
    marginLeft: 8,
  },
  filterText: {
    color: '#6b7280',
    marginBottom: 16,
  },
  filterTextBold: {
    fontWeight: '600',
  },
  discussionContainer: {
    marginBottom: 16,
  },
  discussionCard: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  discussionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  discussionAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  discussionInfo: {
    marginLeft: 8,
  },
  discussionName: {
    fontSize: 14,
    fontWeight: '600',
  },
  discussionTime: {
    fontSize: 12,
    color: '#9ca3af',
  },
  discussionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  discussionText: {
    color: '#4b5563',
    marginBottom: 8,
  },
  discussionFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  discussionComments: {
    color: '#6b7280',
    marginLeft: 4,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  pageButton: {
    backgroundColor: '#e5e7eb',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 25,
    marginHorizontal: 4,
  },
  pageButtonText: {
    color: '#4b5563',
  },
  pageButtonActive: {
    backgroundColor: '#2563eb',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 25,
    marginHorizontal: 4,
  },
  pageButtonTextActive: {
    color: 'white',
  },
});