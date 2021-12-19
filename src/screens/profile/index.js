import React, {useCallback, useState} from 'react';
import {
  Flex,
  View,
  Image,
  Text,
  Button,
  Stack,
  Heading,
  HStack,
} from 'native-base';
import axios from '../../config/axios';
import {useFocusEffect} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {logoutActionCreator} from '../../store/actions';
import EncryptedStorage from 'react-native-encrypted-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ProfileScreen({navigation}) {
  const dispacth = useDispatch();
  const id = useSelector(state => state.auth.id);
  const [favorites, setFavorites] = useState([]);
  const [profile, setProfile] = useState({
    username: '',
    name: '',
    bio: '',
    website: '',
    photo: '',
  });

  useFocusEffect(
    useCallback(() => {
      fetchProfile();
    }, []),
  );

  const fetchProfile = async () => {
    try {
      const resUser = await axios.get(`/users/${id}`);
      const {username, name, bio, website, photo} = resUser.data;
      setProfile({username, name, bio, website, photo});

      const resFavorite = await axios.get('/favourites', {userId: id});
      setFavorites(resFavorite.data);
    } catch (error) {
      alert('Terjadi kesalahan');
      console.log({error});
    }
  };

  const removeUserSession = async () => {
    try {
      await EncryptedStorage.removeItem('userData');
    } catch (error) {
      alert('Terjadi kesalahan, periksa console');
      console.log({error});
    }
  };

  const onLogoutPress = () => {
    // 2. menghapus data di storage
    removeUserSession();
    // 1. menghapus data di redux
    const action = logoutActionCreator();
    dispacth(action);
  };

  return (
    <Flex flex="1" px="2" py="3">
      <Flex direction="row" justify="space-between">
        <Heading>{profile.username}</Heading>
        <HStack space="4">
          <Icon name="plus-box-outline" size={30} />
          <Icon name="menu" size={30} />
        </HStack>
      </Flex>
      <HStack my="5">
        <View width="30%">
          <Image
            style={{width: 100, height: 100}}
            mx="auto"
            rounded="full"
            key={profile.photo}
            source={{uri: profile.photo}}
            alt="Alternate Text"
            size="xl"
          />
        </View>

        <Flex direction="row" w="70%" justify="space-around">
          <Stack my="auto">
            <Text textAlign="center" fontSize="16" fontWeight="bold">
              5
            </Text>
            <Text textAlign="center">saves</Text>
          </Stack>
          <Stack my="auto">
            <Text textAlign="center" fontSize="16" fontWeight="bold">
              17K
            </Text>
            <Text textAlign="center">followers</Text>
          </Stack>
          <Stack my="auto">
            <Text textAlign="center" fontSize="16" fontWeight="bold">
              1
            </Text>
            <Text textAlign="center">following</Text>
          </Stack>
        </Flex>
      </HStack>
      <Stack>
        <Text fontWeight="bold">{profile.name}</Text>
        <Text>{profile.bio}</Text>
        <Text color="blue.900">{profile.website}</Text>
      </Stack>
      <Button
        mt="2"
        w="100%"
        py="1"
        h="8"
        bg="transparent"
        borderWidth="1"
        borderColor="gray.500"
        onPress={() => {
          navigation.navigate('EditProfile', {profile});
        }}>
        <Text color="black">Edit Profile</Text>
      </Button>
    </Flex>
  );
}
