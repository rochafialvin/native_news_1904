import React from 'react';
import {Box, Text} from 'native-base';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
    <Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          height: 50,
          backgroundColor: 'blue',
        },
        tabBarIcon: ({focused}) => {
          let iconName;
          const color = focused ? '#ffffff' : 'gray';

          // name yang kita gunakan pada component screen dibawah
          switch (route.name) {
            case 'TemplateA':
              iconName = focused ? 'heart' : 'heart-outline';
              break;

            case 'TemplateB':
              iconName = focused ? 'play' : 'play-outline';
              break;

            case 'TemplateC':
              iconName = focused ? 'tag' : 'tag-outline';
              break;
          }

          return <Icon name={iconName} color={color} size={25} />;
        },
      })}>
      <Screen name="TemplateA" component={TemplateA} />
      <Screen name="TemplateB" component={TemplateB} />
      <Screen name="TemplateC" component={TemplateC} />
    </Navigator>
  );
}
