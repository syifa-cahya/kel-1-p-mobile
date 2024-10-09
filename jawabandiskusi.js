import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function jawabandiskusi() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.headerLeft}>
            <Image
              source={{ uri: 'https://storage.googleapis.com/a1aa/image/AjP0WL8NSLJ2K9m1c1YlaH4yXLkfe6zGxrx1eBA8PU41fqTOB.jpg' }}
              style={styles.logo}
            />
            <Text style={styles.headerText}>Assalamualaikum</Text>
          </View>
          <View style={styles.headerRight}>
            <FontAwesome name="bell" size={24} color="white" />
            <Image
              source={{ uri: 'https://storage.googleapis.com/a1aa/image/x6UuEGej82yvEKr9MR5UeBuqKfIbHm5VUkX3JcO85hv3fqTOB.jpg' }}
              style={styles.profilePic}
            />
          </View>
        </View>
        <Text style={styles.title}>Musdalifa</Text>
        <View style={styles.searchContainer}>
          <FontAwesome name="search" size={20} color="gray" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Cari permasalahan yang serupa"
            placeholderTextColor="gray"
          />
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.post}>
          <View style={styles.postHeader}>
            <Image
              source={{ uri: 'https://storage.googleapis.com/a1aa/image/x6UuEGej82yvEKr9MR5UeBuqKfIbHm5VUkX3JcO85hv3fqTOB.jpg' }}
              style={styles.postProfilePic}
            />
            <View>
              <Text style={styles.postName}>Ervalsa Dwi Nanda</Text>
              <Text style={styles.postTime}>2 hari yang lalu</Text>
            </View>
          </View>
          <Text style={styles.postTitle}>Bagaimana cara kalian meningkatkan kesadaran diri untuk solat lima waktu?</Text>
          <Text style={styles.postContent}>
            Halo teman-teman semuanya.{"\n"}
            Saya punya pertanyaan. Jadi, saya selama kuliah merantau sendirian. Saya merasa semenjak tinggal sendirian tanpa orang tua, saya menjadi malas-malasan beribadah, salah satunya solat.{"\n"}
            Saya seringkali menunda-nunda solat, tanpa merasa bersalah. Boleh beri saya saran ga? supaya saya lebih rajin ibadah?{"\n"}
            Terima kasih sebelumnya... pliss no salty ya!!
          </Text>
          <View style={styles.postFooter}>
            <FontAwesome name="heart-o" size={20} color="gray" />
            <Text style={styles.postLikes}>46</Text>
          </View>
        </View>
        <View style={styles.comment}>
          <View style={styles.commentHeader}>
            <Image
              source={{ uri: 'https://storage.googleapis.com/a1aa/image/x6UuEGej82yvEKr9MR5UeBuqKfIbHm5VUkX3JcO85hv3fqTOB.jpg' }}
              style={styles.commentProfilePic}
            />
            <View>
              <Text style={styles.commentName}>Musdalifa</Text>
              <Text style={styles.commentTime}>2 hari yang lalu</Text>
            </View>
          </View>
          <Text style={styles.commentContent}>
            Halo, Izin menjawab ya.{"\n"}
            Saya dulu juga seperti itu. Tapi, semenjak sekarang banyak ikut kajian dan memperbanyak teman-teman yang paham agama. Saya jadi lebih baik dari sebelumnya.
          </Text>
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
    backgroundColor: '#3b82f6',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTop: {
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
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: 10,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: 'gray',
  },
  content: {
    padding: 20,
  },
  post: {
    backgroundColor: '#fef3c7',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postProfilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  postName: {
    fontWeight: 'bold',
    color: '#1f2937',
  },
  postTime: {
    color: '#6b7280',
    fontSize: 12,
  },
  postTitle: {
    fontWeight: 'bold',
    color: '#1f2937',
    marginTop: 10,
  },
  postContent: {
    color: '#374151',
    marginTop: 10,
  },
  postFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  postLikes: {
    color: '#6b7280',
    marginLeft: 5,
  },
  comment: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  commentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentProfilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  commentName: {
    fontWeight: 'bold',
    color: '#1f2937',
  },
  commentTime: {
    color: '#6b7280',
    fontSize: 12,
  },
  commentContent: {
    color: '#374151',
    marginTop: 10,
  },
});