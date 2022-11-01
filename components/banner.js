import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Banner() {
  return (
    <View>
      <Image style={styles.banner} source={require("../assets/banner.png")} />
      <Text style={styles.text}> Save extra on every order </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  banner: {
    width: 368,
    height: 203,
    left: 8,
    top: 56,

  },
  text: {
    position: "absolute",
    width: 118,
    height: 42,
    marginLeft: 30,
    marginTop: 100,
    fontSize: 18,
    fontWeight: 'bold',
    color: "blue",

  },

})