import React from 'react';
import {View, Text, Button} from 'react-native';

function Login({navigation}) {
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 20,
          marginBottom: 20,
        }}>
        Login Screen
      </Text>
      <Button
        onPress={() => navigation.navigate('Register')}
        title="Go to register"
        color="blue"
      />
    </View>
  );
}

export default Login;
