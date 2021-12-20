import React, {useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {Box, Image, Text, Flex, View} from 'native-base';
import {useWindowDimensions} from 'react-native';
import axios from '../../config/axios';

export default function FavoriteScreen() {
  const [favorites, setFavorites] = useState([]);
  const {width} = useWindowDimensions();
  const favSize = (width - 14) / 3;
  const userId = useSelector(state => state.auth.id);

  useFocusEffect(
    useCallback(() => {
      fetchFavorites();
    }, []),
  );

  const fetchFavorites = async () => {
    try {
      const res = await axios.get('/favourites', {params: {userId}});
      setFavorites(res.data);
    } catch (error) {
      alert('Terjadi kesalahan');
      console.log({error});
    }
  };

  const createFavoriteList = () => {
    return favorites.map(favorite => {
      return (
        <Box key={favorite.title} w={favSize} h={favSize} bg="blueGray.300">
          <Image
            style={{width: '100%', height: '100%'}}
            key={favorite.urlToImage}
            source={{uri: favorite.urlToImage}}
            alt="Gambar violet dan powder"
          />
        </Box>
      );
    });
  };

  return (
    <Flex direction="row" wrap="wrap">
      {createFavoriteList()}
    </Flex>
  );
}
