import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';

interface LoginProps {
  navigation: {
    navigate: (screen: string) => void;
  };
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const handleLogin = () => {
    Alert.alert('Login', 'You have logged in successfully!');

  };

  const goToSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container1}>
      <View style={styles.topBackground} />
      <Image source={require('../assets/Logo.png')} style={styles.Logo} />
      <TextInput style={styles.input} placeholder="UserName" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goToSignIn}>
        <Text style={styles.SignIn}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FF9A5B',
  },
  topBackground: {
    width: '110%',
    height: '100%',
    backgroundColor: '#ffff',
    borderTopLeftRadius: 124,
    borderTopRightRadius: 124,
    position: 'absolute',
    top: '10%',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: 282,
    height: 50,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#DF6316',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#DF6316',
    paddingVertical: 13,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  SignIn: {
    color: '#DF6316',
    paddingVertical: 10,
    textDecorationLine: 'underline',
  },
  Logo: {
    width: 333,
    height: 247,
  },
});

export default Login;
