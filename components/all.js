import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function All() {
  return (
    <View style={styles.container}>
      <Banner></Banner>
      <Product></Product>
      <All_product></All_product>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: "#ffffe0",
  }
})