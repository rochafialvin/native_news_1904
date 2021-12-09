import React from 'react';
import {Box, Text, Button} from 'native-base';

export default function ProfileScreen({navigation}) {
  return (
    <Box>
      <Text>Profile Screen</Text>
      <Button onPress={() => navigation.navigate('Favorite')}>
        Go to Favorite
      </Button>
    </Box>
  );
}
