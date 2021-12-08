import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import axios from '../../config/axios';

export default function Register({navigation}) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onRegisterPress = async () => {
    try {
      await axios.post('/users', {username, email, password});
      alert('Berhasil register');
    } catch (error) {}
  };

  const onNavigateLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register Screen</Text>
      <TextInput
        placeholder="username"
        style={styles.input}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="email"
        style={styles.input}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="password"
        style={styles.input}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" color="#841584" onPress={onRegisterPress} />
      <Text onPress={onNavigateLogin} style={styles.navigateText}>
        Or Login{' '}
      </Text>
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
