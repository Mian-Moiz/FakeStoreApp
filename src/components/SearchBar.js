import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchBar = ({ value, onChange }) => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="#888" />
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder="Search products..."
        placeholderTextColor="#888"
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginBottom: 12,
    elevation: 2,
  },
  input: {
    flex: 1,
    height: 40,
    marginLeft: 8,
    color: '#333',
  },
});

export default SearchBar;

