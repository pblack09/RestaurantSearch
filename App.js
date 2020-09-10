import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import Information from './src/Information';
import Search from './src/Search';

// MAIN PAGE FORMAT==============================
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restaurant Search</Text>
      <Search />
      <Information />
    </View>
  );
}


// STYLE SHEET===================================
const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    alignSelf: "center",
    fontWeight: "bold",
  },
});
