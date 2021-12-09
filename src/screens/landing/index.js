import React from 'react';
import {ImageBackground} from 'react-native';
import {Flex, Heading, Button} from 'native-base';

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
          <Button
            borderRadius="10"
            borderWidth="3"
            borderColor="primary.500"
            bg="transparent"
            p="1.5"
            _text={{
              fontSize: '18',
            }}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            Login
          </Button>
          <Button
            borderRadius="10"
            borderWidth="3"
            borderColor="primary.500"
            _text={{
              fontSize: '18',
            }}
            onPress={() => {
              navigation.navigate('Register');
            }}>
            Register
          </Button>
        </Flex>
      </Flex>
    </ImageBackground>
  );
};

export default LandingScreen;
