import React, {useState} from 'react';
import {Flex, Heading} from 'native-base';
import axios from '../../../config/axios';
import {useDispatch} from 'react-redux';

import {loginActionCreator} from '../../../store/actions';

import AuthButton from '../../../components/AuthButton';
import AuthInput from '../../../components/AuthInput';
import AuthNavigateText from '../../../components/AuthNavigateText';

export default function LoginScreen({navigation}) {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onLoginPress = async () => {
    try {
      const res = await axios.get('/users', {params: {username, password}});
      if (res.data.length) {
        const {id, username} = res.data[0];
        const action = loginActionCreator({id, username});
        dispatch(action);
        alert('Berhasil login gan');
      } else {
        alert('Username atau Password salah');
      }
    } catch (error) {}
  };

  const onNavigateRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <Flex w="80%" h="50%" m="auto" justify="space-between">
      <Heading textAlign="center" fontSize="30" letterSpacing="2">
        Login
      </Heading>
      <Flex>
        <AuthInput onChangeText={setUsername} placeholder="Username" />
        <AuthInput
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry
        />
        <AuthButton title="Login" onPress={onLoginPress} />
        <AuthNavigateText title="Or Register" onPress={onNavigateRegister} />
      </Flex>
    </Flex>
  );
}
