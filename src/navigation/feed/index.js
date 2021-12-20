import React from 'react';
import {Box, Text} from 'native-base';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import FavoriteScreen from '../../screens/favorite';

const {Navigator, Screen} = createMaterialTopTabNavigator();

function ReelScreen() {
  return (
    <Box flex="1">
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          marginTop: 'auto',
          marginBottom: 'auto',
        }}>
        Reel Screen
      </Text>
    </Box>
  );
}
function TagScreen() {
  return (
    <Box flex="1">
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          marginTop: 'auto',
          marginBottom: 'auto',
        }}>
        Tag Screen
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
            case 'Favorite':
              iconName = focused ? 'heart' : 'heart-outline';
              break;

            case 'Reel':
              iconName = focused ? 'play' : 'play-outline';
              break;

            case 'Tag':
              iconName = focused ? 'tag' : 'tag-outline';
              break;
          }

          return <Icon name={iconName} color={color} size={25} />;
        },
      })}>
      <Screen name="Favorite" component={FavoriteScreen} />
      <Screen name="Reel" component={ReelScreen} />
      <Screen name="Tag" component={TagScreen} />
    </Navigator>
  );
}
