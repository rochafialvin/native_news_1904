import React from 'react';
import {Box, Text} from 'native-base';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const {Navigator, Screen} = createMaterialTopTabNavigator();

function TemplateA() {
  return (
    <Box flex="1">
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          marginTop: 'auto',
          marginBottom: 'auto',
        }}>
        Template A
      </Text>
    </Box>
  );
}
function TemplateB() {
  return (
    <Box flex="1">
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          marginTop: 'auto',
          marginBottom: 'auto',
        }}>
        Template B
      </Text>
    </Box>
  );
}
function TemplateC() {
  return (
    <Box flex="1">
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          marginTop: 'auto',
          marginBottom: 'auto',
        }}>
        Template C
      </Text>
    </Box>
  );
}

export default function FeedNavigation() {
  return (
    <Navigator>
      <Screen name="TemplateA" component={TemplateA} />
      <Screen name="TemplateB" component={TemplateB} />
      <Screen name="TemplateC" component={TemplateC} />
    </Navigator>
  );
}
