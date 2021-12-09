import React from 'react';
import {ImageBackground} from 'react-native';
import {Flex, Heading, Button} from 'native-base';
import AuthButton from '../../components/AuthButton';

// menggunakan require karena file gambar diambil dari dalam project
const image = require('../../assets/images/news-1.jpg');

const LandingScreen = ({navigation}) => {
  return (
    <ImageBackground source={image} style={{flex: 1}}>
      <Flex h="90%" w="80%" m="auto" justify="space-around">
        <Heading
          textAlign="center"
          fontSize="50"
          color="primary.700"
          italic
          letterSpacing="3">
          Flash News
        </Heading>
        <Flex h="17%" justify="space-between">
          <AuthButton
            title="Login"
            bg="transparent"
            onPress={() => {
              navigation.navigate('Login');
            }}
          />
          <AuthButton
            title="Register"
            onPress={() => {
              navigation.navigate('Register');
            }}
          />
        </Flex>
      </Flex>
    </ImageBackground>
  );
};

export default LandingScreen;
