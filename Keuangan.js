import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <FontAwesome name="chevron-left" size={24} color="black" />
        <Text style={styles.headerTitle}>Keuangan</Text>
        <View style={{ width: 24 }} />
      </View>
      <Text style={styles.subHeader}>
        minggu lalu <FontAwesome name="chevron-down" size={14} color="#1E40AF" />
      </Text>
      <Text style={styles.sectionTitle}>Keuangan</Text>
      <View style={styles.graphContainer}>
        <Image
          source={{ uri: 'https://placehold.co/200x100?text=Graph' }}
          style={styles.graphImage}
        />
      </View>
      <Text style={styles.totalText}>
        Total <Text style={styles.totalAmount}>Rp. 14.062.004</Text>
      </Text>
      <Text style={styles.targetText}>
        Target <Text style={styles.targetAmount}>Rp 15.284.787</Text>
      </Text>
      <Text style={styles.sectionTitle}>Pengelolaan</Text>
      <View style={styles.managementContainer}>
        <Image
          source={{ uri: 'https://placehold.co/80x80?text=92%25' }}
          style={styles.progressImage}
        />
        <View style={styles.managementDetails}>
          <View style={styles.managementItem}>
            <View style={[styles.dot, { backgroundColor: '#10B981' }]} />
            <Text style={styles.managementText}>Pembangunan</Text>
            <Text style={styles.managementValue}>50</Text>
          </View>
          <View style={styles.managementItem}>
            <View style={[styles.dot, { backgroundColor: '#F59E0B' }]} />
            <Text style={styles.managementText}>Penyaluran</Text>
            <Text style={styles.managementValue}>46</Text>
          </View>
          <View style={styles.managementItem}>
            <View style={[styles.dot, { backgroundColor: '#EF4444' }]} />
            <Text style={styles.managementText}>Bencana Alam</Text>
            <Text style={styles.managementValue}>5</Text>
          </View>
          <View style={styles.managementItem}>
            <View style={[styles.dot, { backgroundColor: '#3B82F6' }]} />
            <Text style={styles.managementText}>Pelayanan</Text>
            <Text style={styles.managementValue}>4</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.donateButton}>
        <Text style={styles.donateButtonText}>Donasi</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  subHeader: {
    color: '#1E40AF',
    fontSize: 14,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  graphContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  graphImage: {
    width: 200,
    height: 100,
  },
  totalText: {
    textAlign: 'center',
    color: '#4B5563',
    marginBottom: 16,
  },
  totalAmount: {
    color: '#1E40AF',
    fontWeight: '600',
  },
  targetText: {
    color: '#6B7280',
    fontSize: 14,
    marginBottom: 8,
  },
  targetAmount: {
    color: '#F59E0B',
  },
  managementContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  progressImage: {
    width: 80,
    height: 80,
  },
  managementDetails: {
    marginLeft: 16,
  },
  managementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  managementText: {
    flex: 1,
  },
  managementValue: {
    marginLeft: 'auto',
  },
  donateButton: {
    width: '100%',
    backgroundColor: '#3B82F6',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  donateButtonText: {
    color: 'white',
    fontWeight: '600',
  },
});