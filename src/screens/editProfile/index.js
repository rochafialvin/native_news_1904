import React, {useState} from 'react';
import axios from '../../config/axios';
import {useSelector} from 'react-redux';
import {Input, Image, Text, Heading, Flex, HStack, View} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CommonActions} from '@react-navigation/native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function EditProfileScreen({route, navigation}) {
  const {profile} = route.params;
  const userId = useSelector(state => state.auth.id);
  const [username, setUsername] = useState(profile.username);
  const [name, setName] = useState(profile.name);
  const [website, setWebsite] = useState(profile.website);
  const [bio, setBio] = useState(profile.bio);
  const [photo, setPhoto] = useState(profile.photo);

  const onChangePicturePress = async type => {
    try {
      let res;
      if (type === 'camera') {
        res = await launchCamera({saveToPhotos: true});
      } else {
        res = await launchImageLibrary({saveToPhotos: true});
      }
      if (!res.didCancel) setPhoto(res.assets[0].uri);
    } catch (error) {
      alert('Terjadi kesalahan');
      console.log({error});
    }
  };

  const onSaveEditPress = async () => {
    try {
      await axios.patch(`/users/${userId}`, {
        username,
        name,
        website,
        bio,
        photo,
      });
      alert('Berhasil update data');
    } catch (error) {
      alert('Terjadi masalah');
      console.log({error});
    }
  };

  return (
    <Flex flex="1" px="2" py="3">
      <Flex direction="row" justify="space-between">
        <HStack space="4">
          <Icon
            name="window-close"
            size={30}
            onPress={() => {
              navigation.dispatch(CommonActions.goBack());
            }}
          />
          <Heading>Edit Profile</Heading>
        </HStack>
        <Icon name="check" size={30} color="blue" onPress={onSaveEditPress} />
      </Flex>
      <Flex align="center" my="5">
        <Image
          style={{width: 100, height: 100}}
          key={photo}
          mx="auto"
          rounded="full"
          source={{uri: photo}}
          alt="Alternate Text"
          size="xl"
        />
        <HStack space="2">
          <Text
            style={{color: 'blue'}}
            fontSize="16"
            onPress={() => {
              onChangePicturePress('camera');
            }}>
            Camera
          </Text>
          <Text
            style={{color: 'blue'}}
            fontSize="16"
            onPress={() => {
              onChangePicturePress('gallery');
            }}>
            Gallery
          </Text>
        </HStack>
      </Flex>
      <Flex>
        <Input
          variant="underlined"
          placeholder="Name"
          onChangeText={setName}
          value={name}
        />
        <Input
          variant="underlined"
          placeholder="Username"
          onChangeText={setUsername}
          value={username}
        />
        <Input
          variant="underlined"
          placeholder="Website"
          onChangeText={setWebsite}
          value={website}
        />
        <Input
          variant="underlined"
          placeholder="Bio"
          onChangeText={setBio}
          value={bio}
        />
      </Flex>
    </Flex>
  );
}
