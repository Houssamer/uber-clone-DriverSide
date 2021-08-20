import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/Home/HomeScreen';
import * as Location from 'expo-location';
import LoginScreen from './Screens/LoginScreen/LoginScreen';

Location.installWebGeolocationPolyfill();
navigator.geolocation.getCurrentPosition();



export default function App() {
  const [user, setUser] = useState(false);
  return (
    <View style={styles.container}>
      {
        !user ? (
          <LoginScreen />
        ) : (
          <HomeScreen />
        )
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
