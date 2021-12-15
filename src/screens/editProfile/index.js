import React from 'react';
import {Input, Image, Text, Heading, Flex, HStack} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CommonActions} from '@react-navigation/native';

export default function EditProfileScreen({navigation}) {
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
    </Flex>
  );
}
