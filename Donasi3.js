import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Donasi3() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <FontAwesome name="arrow-left" size={24} color="black" />
        <Text style={styles.headerTitle}>Donasi</Text>
        <FontAwesome name="cog" size={24} color="black" />
      </View>
      <View style={styles.content}>
        <Image
          source={{ uri: 'https://storage.googleapis.com/a1aa/image/Leypy7fzeSJT8IagkHVnzg2T3q95XFFP2o6SdLrcYMpUg1JnA.jpg' }}
          style={styles.image}
        />
        <Text style={styles.title}>Bantu Banjir Palembang Kembali Pulih.</Text>
      </View>
      <View style={styles.donationContainer}>
        <Text style={styles.label}>Fill the nominal</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.currency}>Rp</Text>
          <TextInput style={styles.input} value="200.000" />
        </View>
        <View style={styles.buttonGrid}>
          {['10.000', '50.000', '100.000', '150.000', '200.000', '250.000'].map((amount) => (
            <TouchableOpacity key={amount} style={styles.amountButton}>
              <Text style={styles.amountText}>Rp {amount}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={styles.paymentButton}>
          <Text style={styles.paymentText}>Select Payment Methode</Text>
          <FontAwesome name="chevron-right" size={16} color="black" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  donationContainer: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  label: {
    color: '#4b5563',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  currency: {
    color: '#4b5563',
  },
  input: {
    marginLeft: 10,
    color: '#1f2937',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#f3f4f6',
    borderRadius: 10,
    padding: 10,
    flex: 1,
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  amountButton: {
    backgroundColor: '#f3f4f6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
    width: '30%',
    alignItems: 'center',
  },
  amountText: {
    color: '#1f2937',
  },
  paymentButton: {
    backgroundColor: '#f3f4f6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paymentText: {
    color: '#1f2937',
  },
});