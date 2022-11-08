import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.introduce}>
        <Image style={styles.image} source={require("../assets/image22.png")} />
        <View style={styles.name}>
          <Text style={styles.benCline}> Hi, Út Tiến</Text>
          <Text>Nice to meet you</Text>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
  },
  introduce: {
    flexDirection: "row",
    marginTop: 20,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name: {
    marginLeft: 20,
  },
  benCline: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

