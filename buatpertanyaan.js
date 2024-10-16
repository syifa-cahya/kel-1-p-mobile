import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Buat pertanyaan baru</Text>
          <TouchableOpacity>
            <FontAwesome name="times" size={24} color="gray" />
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Judul Pertanyaan</Text>
          <TextInput
            placeholder="Silahkan tulis judul pertanyaan ..."
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Deskripsi Pertanyaan</Text>
          <View style={styles.editorContainer}>
            <ScrollView horizontal style={styles.toolbar}>
              <TouchableOpacity style={styles.iconButton}>
                <FontAwesome name="bold" size={20} color="gray" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <FontAwesome name="italic" size={20} color="gray" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <FontAwesome name="underline" size={20} color="gray" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <FontAwesome name="list-ul" size={20} color="gray" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <FontAwesome name="list-ol" size={20} color="gray" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <FontAwesome name="align-left" size={20} color="gray" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <FontAwesome name="align-center" size={20} color="gray" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <FontAwesome name="align-right" size={20} color="gray" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <FontAwesome name="align-justify" size={20} color="gray" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <FontAwesome name="link" size={20} color="gray" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <FontAwesome name="image" size={20} color="gray" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <FontAwesome name="code" size={20} color="gray" />
              </TouchableOpacity>
            </ScrollView>
            <TextInput
              placeholder="Ketik sesuatu disini ..."
              style={styles.textArea}
              multiline
            />
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Buat Pertanyaan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: 320,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#F3F4F6',
    borderRadius: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  editorContainer: {
    backgroundColor: '#F3F4F6',
    borderRadius: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  toolbar: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  iconButton: {
    marginRight: 10,
  },
  textArea: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    height: 100,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  button: {
    backgroundColor: '#3B82F6',
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});