import React from 'react';
import {Button} from 'native-base';

export default function AuthButton(props) {
  return (
    <Button
      borderRadius="10"
      borderWidth="3"
      borderColor="primary.500"
      p="1.5"
      _text={{
        fontSize: '18',
      }}
      {...props}>
      {props.title}
    </Button>
  );
}
