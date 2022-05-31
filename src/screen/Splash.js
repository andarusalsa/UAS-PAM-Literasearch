import React, { Component, useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const [timePassed, setTimePassed] = useState(false);

  setTimeout(function () {
    setTimePassed(true);
  }, 5000);

  if (!timePassed) {
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
    );
  }
  navigation.navigate('HomeScreen');
  return null;
};

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

export default SplashScreen;