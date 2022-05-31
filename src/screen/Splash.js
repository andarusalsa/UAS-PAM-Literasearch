import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native';


export default function Splash ({navigation}) {
  return (
    <View style={{ backgroundColor: '#EEC9EF', flex: 1 }}>
      <ImageBackground
        source={require('../picture/Background.png')}
        style={styles.image}>
        <Image
          style={styles.logo}
          source={require("../picture/Logo.png")}>
        </Image>

        <Text style={styles.text}>
          Literasearch
        </Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 48,
    color: 'red',
    fontWeight: '400',
  },
  logo: {
    width: 189,
    height: 229,
  },
})

