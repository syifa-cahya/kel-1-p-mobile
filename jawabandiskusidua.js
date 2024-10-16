import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function jawabandiskusidua() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <FontAwesome name="arrow-left" size={24} color="white" />
          <Text style={styles.headerText}>Assalamualaikum</Text>
          <View style={styles.headerIcons}>
            <FontAwesome name="search" size={24} color="white" />
            <FontAwesome name="user-circle" size={24} color="white" />
          </View>
        </View>
        <Text style={styles.headerTitle}>Musdalifa</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Cari permasalahan yang serupa"
          placeholderTextColor="#888"
        />
      </View>
      <View style={styles.content}>
        <View style={styles.post}>
          <View style={styles.postHeader}>
            <Image
              source={{ uri: 'https://placehold.co/40x40' }}
              style={styles.profileImage}
            />
            <View>
              <Text style={styles.postAuthor}>Ervalsa Dwi Nanda</Text>
              <Text style={styles.postTime}>2 hari yang lalu</Text>
            </View>
          </View>
          <Text style={styles.postTitle}>
            Bagaimana cara kalian meningkatkan kesadaran diri untuk solat lima waktu?
          </Text>
          <Text style={styles.postContent}>
            Halo teman-teman semuanya.{"\n"}
            Saya punya pertanyaan. Jadi, saya selama kuliah merantau sendirian. Saya merasa seringkali tinggal sendirian tanpa orang tua, saya menjadi malas-malasan beribadah, salah satunya solat.{"\n"}
            Saya seringkali menunda-nunda solat, tanpa merasa bersalah. Boleh beri saya saran ga? supaya saya lebih rajin ibadah?{"\n"}
            Terima kasih sebelumnya... pliss no salty ya!!
          </Text>
          <View style={styles.postFooter}>
            <FontAwesome name="comment" size={20} color="#888" />
            <Text style={styles.commentCount}>46</Text>
          </View>
        </View>
        <View style={styles.answerBox}>
          <View style={styles.answerIcons}>
            <FontAwesome name="bold" size={20} color="#888" />
            <FontAwesome name="italic" size={20} color="#888" />
            <FontAwesome name="underline" size={20} color="#888" />
            <FontAwesome name="list-ul" size={20} color="#888" />
            <FontAwesome name="list-ol" size={20} color="#888" />
            <FontAwesome name="align-left" size={20} color="#888" />
            <FontAwesome name="align-center" size={20} color="#888" />
            <FontAwesome name="align-right" size={20} color="#888" />
            <FontAwesome name="link" size={20} color="#888" />
            <FontAwesome name="image" size={20} color="#888" />
          </View>
          <TextInput
            style={styles.answerInput}
            placeholder="Ketik sesuatu disini ..."
            placeholderTextColor="#888"
            multiline
          />
          <TouchableOpacity style={styles.answerButton}>
            <Text style={styles.answerButtonText}>Beri Jawaban</Text>
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
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 14,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
  searchInput: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 8,
    marginTop: 16,
    color: '#333',
  },
  content: {
    padding: 16,
  },
  post: {
    backgroundColor: '#fef3c7',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  postAuthor: {
    fontWeight: 'bold',
  },
  postTime: {
    color: '#888',
    fontSize: 12,
  },
  postTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  postContent: {
    color: '#333',
    marginBottom: 8,
  },
  postFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentCount: {
    color: '#888',
    marginLeft: 4,
  },
  answerBox: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  answerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  answerInput: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
    height: 80,
    textAlignVertical: 'top',
    color: '#333',
  },
  answerButton: {
    backgroundColor: '#2563eb',
    borderRadius: 10,
    padding: 12,
    marginTop: 8,
    alignItems: 'center',
  },
  answerButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});