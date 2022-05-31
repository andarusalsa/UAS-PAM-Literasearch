import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput} from 'react-native';

export default function Detail ({navigation}) {
    return(
      <View style={{flex:1, backgroundColor:'white'}}>
        <View style={styles.wrap1}>
          <View style={styles.book}></View>
          <Text style={styles.penulis}>Ivanna Van Dijk</Text>
          <Text style={styles.rating}>Rating : 4.5</Text>
        </View>

        <View>
          <Text style={styles.judul}>INFORMASI BUKU</Text>
          <Text style={styles.keterangan}>Judul Buku : </Text>
          <Text style={styles.keterangan}>Penulis : </Text>
          <Text style={styles.keterangan}>Deskripsi : </Text>
          <Text style={styles.judul}>TERSEDIA DI :</Text>
          <Text style={styles.keterangan}>Gramedia Lampung: </Text>
        </View>

      </View>
    )
  }


const styles = StyleSheet.create({
  wrap1:{
    height: 484,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: '#5F085B'
  },
  book:{
    left: 101,
    top:75,
    height: 278,
    width: 188,
    backgroundColor: 'white',
    border:1
  },
  penulis:{
    marginTop: 100,
    alignSelf:'center',
    fontSize:20,
    fontWeight: 500,
    color: '#EEC9EF',
  },
  rating:{
    alignSelf:'center',
    fontSize:14,
    fontWeight: 400,
    color: '#EEC9EF',
  },
  judul:{
    fontSize: 14,
    fontWeight: 800,
    color: '#5F085B',
    marginLeft: 27,
    marginTop: 15
  },
  keterangan:{
    fontSize: 12,
    fontWeight: 400,
    marginLeft: 27,
    marginTop: 15
  }
})
