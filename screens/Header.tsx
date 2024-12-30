import React from 'react';
import { View, Text, StyleSheet, SafeAreaView ,Image } from 'react-native';

const Header: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
      <Image source={require('../assets/HeaderLogo.png')} style={styles.Logo} />
        <Text style={styles.headerText}>Log in</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#fff',
    width: '100%',
    paddingTop: 20, 
  },
  header: {
    height: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignContent: 'center',
    shadowColor: '#000',
    borderWidth: 1,
    borderColor: '#DF6316',    
    marginTop: 20, 
  },
  headerText: {
    fontSize: 16,
    color: '#DF6316',
    top: -17,
    left: 345,
    fontWeight: 'bold',
  },
  Logo: {
    top: 9,
    width: 151,
    height: 31,
  },
});

export default Header;
