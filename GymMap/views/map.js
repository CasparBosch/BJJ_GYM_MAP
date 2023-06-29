//imports
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

//map function
export default function Map() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
}

//style
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
