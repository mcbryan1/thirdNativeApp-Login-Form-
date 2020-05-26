import React from 'react';
import { StyleSheet, View } from 'react-native';
import Login from './src/screen/Login'
import SignUp from './src/screen/Signup'
import PetPageScreen from './src/screen/PetPageScreen'


export default function App() {
  return (
    <View style={styles.container}>
      {/* <Login/> */}
      {/* <SignUp/> */}
      <PetPageScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
