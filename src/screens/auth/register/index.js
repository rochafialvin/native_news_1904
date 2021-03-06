import React, {useState} from 'react';
import {Flex, Heading} from 'native-base';
import axios from '../../../config/axios';

import AuthButton from '../../../components/AuthButton';
import AuthInput from '../../../components/AuthInput';
import AuthNavigateText from '../../../components/AuthNavigateText';

export default function RegisterScreen({navigation}) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onRegisterPress = async () => {
    try {
      await axios.post('/users', {
        username,
        email,
        password,
        photo:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_518099.png&f=1&nofb=1',
      });
      alert('Berhasil register');
    } catch (error) {}
  };

  const onNavigateLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <Flex w="80%" h="50%" m="auto" justify="space-between">
      <Heading textAlign="center" fontSize="30" letterSpacing="2">
        Register
      </Heading>
      <Flex>
        <AuthInput onChangeText={setUsername} placeholder="Username" />
        <AuthInput onChangeText={setEmail} placeholder="Email" />
        <AuthInput
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry
        />
        <AuthButton title="Register" onPress={onRegisterPress} />
        <AuthNavigateText title="Or Login" onPress={onNavigateLogin} />
      </Flex>
    </Flex>
  );
}
