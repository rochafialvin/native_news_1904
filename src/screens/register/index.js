import React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

export default function Register() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register Screen</Text>
      <TextInput style={styles.input} />
      <TextInput style={styles.input} />
      <TextInput style={styles.input} />
      <Button title="Login" color="#841584" />
      <Text style={styles.navigateText}>Or Login </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    borderRadius: 7,
    padding: 10,
  },
  navigateText: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 17,
  },
});
