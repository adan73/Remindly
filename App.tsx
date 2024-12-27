import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/LogIn'; // Adjust your file path if necessary
import SignIn from './screens/SignIn'; // Adjust your file path if necessary

const Stack = createStackNavigator();

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }} // Hide the header
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }} // Hide the header
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

// Renamed the local Login component to LoginScreen to avoid naming conflict
const LoginScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Button
        title="Log In"
        onPress={() => navigation.navigate('Login')} // Stay on the Login screen
      />
      <Button
        title="Sign In"
        onPress={() => navigation.navigate('SignIn')} // Navigate to SignIn screen
      />
    </View>
  );
};

// SignIn Screen where the SignIn button takes you back to the Login screen
const SignInScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Text>Sign In Screen</Text>
      <Button
        title="Log In"
        onPress={() => navigation.navigate('Login')} // Navigate to Login screen
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
