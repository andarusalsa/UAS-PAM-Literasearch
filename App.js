import React, {Component} from 'react';
import { render } from 'react-dom';
import {Platform, StyleSheet, Text, View, Image, TextInput} from 'react-native';
import HomeScreen from "./scr/screen/HomeScreen.js";
import Detail from "./scr/screen/Detail.js";
import Navigation from './scr/navigation/navigation.js';

export default function App (){
  return(
    <Navigation/>
  )
}