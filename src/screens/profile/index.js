import React from 'react';
import {Flex, Text, Button, Stack} from 'native-base';
import {useDispatch} from 'react-redux';
import {logoutActionCreator} from '../../store/actions';
import EncryptedStorage from 'react-native-encrypted-storage';

export default function ProfileScreen({navigation}) {
  const dispacth = useDispatch();

  async function removeUserSession() {
    try {
      await EncryptedStorage.removeItem('userData');
    } catch (error) {
      alert('Terjadi kesalahan, periksa console');
      console.log({error});
    }
  }

  const onLogoutPress = () => {
    // 2. menghapus data di storage
    removeUserSession();
    // 1. menghapus data di redux
    const action = logoutActionCreator();
    dispacth(action);
  };

  return (
    <Flex flex="1" align="center" justify="center">
      <Stack space="4">
        <Text>Profile Screen</Text>
        <Button onPress={() => navigation.navigate('Favorite')}>
          Go to Favorite
        </Button>
        <Button onPress={onLogoutPress}>Logout</Button>
      </Stack>
    </Flex>
  );
}
