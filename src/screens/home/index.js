import React from 'react';
import {Box, Text, Button} from 'native-base';

export default function HomeScreen({navigation}) {
  return (
    <Box>
      <Text> Home Screen </Text>
      <Button onPress={() => navigation.navigate('Detail')}>
        Go to Detail
      </Button>
    </Box>
  );
}
