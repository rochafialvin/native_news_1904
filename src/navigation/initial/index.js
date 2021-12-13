import {useDispatch, useSelector} from 'react-redux';
import React, {useState, useEffect} from 'react';
import {Spinner, Heading, Stack, Flex, Center} from 'native-base';
import {loginActionCreator} from '../../store/actions';
import EncryptedStorage from 'react-native-encrypted-storage';

import AuthNavigation from '../auth';
import MainNavigation from '../main';

export default function InitialNavigation() {
  const [isStorageChecked, setIsStorageChecked] = useState(false);
  const dispatch = useDispatch();
  const username = useSelector(state => state.auth.username);

  useEffect(() => {
    setTimeout(retrieveUserSession, 2000);
  }, []);

  const retrieveUserSession = async () => {
    try {
      const userStorageData = await EncryptedStorage.getItem('userData');

      if (userStorageData) {
        // simpan data usernya ke redux state
        // data dari storage masih dalam bentuk string maka kita ubah menajadi object menggunakan JSON.parse
        const action = loginActionCreator(JSON.parse(userStorageData));
        dispatch(action);
      }
      setIsStorageChecked(true);
    } catch (error) {
      // There was an error on the native side
      alert('Terjadi kesalaha, periksa console');
      console.log({error});
    }
  };

  if (!isStorageChecked) {
    return (
      <Center flex="1">
        <Stack direction="row" space="2">
          <Spinner />
          <Heading color="primary.500">Loading ...</Heading>
        </Stack>
      </Center>
    );
  }

  return username ? <MainNavigation /> : <AuthNavigation />;
}
