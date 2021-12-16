import React, {useState} from 'react';
import axios from '../../config/axios';
import {useSelector} from 'react-redux';
import {Input, Image, Text, Heading, Flex, HStack, View} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CommonActions} from '@react-navigation/native';
import DocumentPicker from 'react-native-document-picker';

export default function EditProfileScreen({route, navigation}) {
  const {profile} = route.params;
  const userId = useSelector(state => state.auth.id);
  const [username, setUsername] = useState(profile.username);
  const [name, setName] = useState(profile.name);
  const [website, setWebsite] = useState(profile.website);
  const [bio, setBio] = useState(profile.bio);
  const [photo, setPhoto] = useState(profile.photo);

  const onChangePicturePress = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      setPhoto(res[0].uri);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        alert('Anda telah menekan tombol cancel');
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        alert('Terjadi masalah');
        throw err;
      }
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
        <Text
          style={{color: 'blue'}}
          fontSize="16"
          onPress={onChangePicturePress}>
          Change your profile picture
        </Text>
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