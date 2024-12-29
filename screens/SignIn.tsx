import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image ,Alert} from 'react-native';

interface SigninProps {
  navigation: {
    navigate: (screen: string) => void;
  };
}

const Signin: React.FC<SigninProps> = ({ navigation }) => {
  const handleSignin = () => {
    Alert.alert('Login', 'You have Signed in successfully!');

  };
  const goToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container1}>
      <View style={styles.topBackground} />
      <Image source={require('../assets/Logo.png')} style={styles.Logo} />
      
      <Text style={styles.SignIn}>Enter your new UserName:</Text>
      <TextInput style={styles.input} />
      
      <Text style={styles.SignIn}>Enter your new Password:</Text>
      <TextInput style={styles.input} secureTextEntry />
      
      <TouchableOpacity style={styles.button} onPress={handleSignin}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goToLogin}>
        <Text style={styles.LogIn}>Log In</Text>
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
      marginBottom: 10,
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
      paddingVertical: 5,
      alignSelf: 'flex-start', 
      left: 45,
    },
    Logo: {
      width: 333,
      height: 247,
    },
    LogIn: {
        color: '#DF6316',
        paddingVertical: 10,
        textDecorationLine: 'underline', 
      },
  });
  

export default Signin;
