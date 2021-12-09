import React from 'react';
import {Text} from 'native-base';

export default function AuthNavigateText(props) {
  return (
    <Text
      mt="1.5"
      color="primary.500"
      fontSize="17"
      bold
      textAlign="center"
      {...props}>
      {props.title}
    </Text>
  );
}
