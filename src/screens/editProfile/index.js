import React, {useState} from 'react';
import {Input, Image, Text, Heading, Flex, HStack, View} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CommonActions} from '@react-navigation/native';

export default function EditProfileScreen({route, navigation}) {
  const {profile} = route.params;
  const [username, setUsername] = useState(profile.username);
  const [name, setName] = useState(profile.name);
  const [website, setWebsite] = useState(profile.website);
  const [bio, setBio] = useState(profile.bio);

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
        <Icon name="check" size={30} color="blue" />
      </Flex>
      <Flex align="center" my="5">
        <Image
          style={{width: 100, height: 100}}
          mx="auto"
          rounded="full"
          source={{
            uri: 'https://wallpaperaccess.com/full/317501.jpg',
          }}
          alt="Alternate Text"
          size="xl"
        />
        <Text style={{color: 'blue'}} fontSize="16">
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
