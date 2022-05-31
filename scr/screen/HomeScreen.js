import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

export default function HomeScreen ({navigation}) {
    return(
      <View styles={{backgroundColor:'white',flex:1}}> 

        <View style={styles.wrap1}>
          <View>
              <View style={{top:70, left: 30}}>
                <TextInput placeholder="Search Book..." style={styles.search}/>
              </View>
              <View style={styles.judulbox}>
                <Text style={{fontSize: 24, fontFamily: 'Pacifio', fontWeight:1000}}>
                Literasearch
                </Text>
                <Text>Cari bukumu disini</Text>
              </View>
          </View>
        </View>

        <View style={{left:30, top:10}}>
          <View>
            <Text style={{fontSize:14, color: '#5F085B', fontStyle:'normal', fontWeight:900}}>KATEGORI BUKU</Text>
          </View>

          <View style={{flexDirection:'row', flexWrap: 'wrap', marginHorizontal: 16, marginTop:16}}>
            <View style={{justifyContent: 'space-between', flexDirection:'row', width:'90%',marginBottom: 18}}>
              <View>
                <View style={styles.kategori}></View> 
                <Text style={styles.ketKategori}>Agama</Text>
              </View>
              <View>
                <View style={styles.kategori}></View>
                <Text style={styles.ketKategori}>Anak-Anak</Text> 
              </View>
              <View>
                <View style={styles.kategori}></View> 
                <Text style={styles.ketKategori}>Bisnis</Text>
              </View>
              <View>
                <View style={styles.kategori}></View> 
                <Text style={styles.ketKategori}>Fiksi</Text>
              </View>
              <View>
                <View style={styles.kategori}></View> 
                <Text style={styles.ketKategori}>Hukum</Text>
              </View>
            </View>

            <View style={{justifyContent: 'space-between', flexDirection:'row', width:'90%',marginBottom: 18}}>
              <View>
                <View style={styles.kategori}></View> 
                <Text style={styles.ketKategori}>Kesehatan</Text>
              </View>
              <View>
                <View style={styles.kategori}></View> 
                <Text style={styles.ketKategori}>Keuangan</Text>
              </View>
              <View>
                <View style={styles.kategori}></View> 
                <Text style={styles.ketKategori}>Komputer</Text>
              </View>
              <View>
                <View style={styles.kategori}></View> 
                <Text style={styles.ketKategori}>Psikologi</Text>
              </View>
              <View>
                <View style={styles.kategori}></View> 
                <Text style={styles.ketKategori}>Seni</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{left:30}}>
          <View>
            <Text style={{marginTop: 10,fontSize:14, color: '#5F085B', fontStyle:'normal', fontWeight:900}}>THE LIBRARY</Text>
          </View>
          <View>
            <View style={{left:10, justifyContent: 'space-between', flexDirection:'row', width:'80%',marginBottom: 18}}>
                <View>
                  <View style={styles.buku}></View> 
                  <Text style={styles.penulis}>Risa Sarasvati</Text>
                  <Text style={styles.judul}>Ivanna Van Dijk</Text>
                </View>
                <View>
                  <View style={styles.buku}></View> 
                  <Text style={styles.penulis}>Risa Sarasvati</Text>
                  <Text style={styles.judul}>Ivanna Van Dijk</Text>
                </View>
            </View>
            <View style={{left:10, justifyContent: 'space-between', flexDirection:'row', width:'80%',marginBottom: 18}}>
                <View>
                  <View style={styles.buku}></View> 
                  <Text style={styles.penulis}>Risa Sarasvati</Text>
                  <Text style={styles.judul}>Ivanna Van Dijk</Text>
                </View>
                <View>
                  <View style={styles.buku}></View> 
                  <Text style={styles.penulis}>Risa Sarasvati</Text>
                  <Text style={styles.judul}>Ivanna Van Dijk</Text>
                </View>
            </View>
            <View style={{left:10, justifyContent: 'space-between', flexDirection:'row', width:'80%',marginBottom: 18}}>
                <View>
                  <View style={styles.buku}></View> 
                  <Text style={styles.penulis}>Risa Sarasvati</Text>
                  <Text style={styles.judul}>Ivanna Van Dijk</Text>
                </View>
                <View>
                  <View style={styles.buku}></View> 
                  <Text style={styles.penulis}>Risa Sarasvati</Text>
                  <Text style={styles.judul}>Ivanna Van Dijk</Text>
                </View>
            </View>
          </View>
        </View>

      </View>
    )

}

const styles = StyleSheet.create({
  wrap1:{
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    backgroundColor:'#EEC9EF', 
    height: 261},
  search:{
    borderRadius:10, 
    width:330, 
    height:44, 
    left: 30, 
    top: 105, 
    fontSize: 14, 
    padding: 20, 
    backgroundColor:'#ffffff'},
  judulbox:{
    top:100, 
    left: 30, 
    color: '#5F085B'},
  kategori:{
    borderWidth: 1,
    width:45, 
    height: 45, 
    borderColor:'000000', 
    borderRadius:30
  },
  ketKategori:{
    fontSize:12,
    fontWeight: 500,
    alignSelf:'center',
    marginTop: 4
  },
  buku:{
    marginTop:28,
    width: 121,
    height: 152,
    backgroundColor: '#EEC9EF',
    borderRadius:5
  },
  penulis:{
    fontSize:10,
    fontWeight:400,
    alignSelf:'center'
  },
  judul:{
    fontSize: 16,
    fontWeight:600,
    alignSelf:'center'
  }
})