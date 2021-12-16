import React from 'react';
import {Box, Heading, Text, Stack, Pressable} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from '../../../config/axios';
import {useSelector} from 'react-redux';

export default function ArticleItem({article, navigation}) {
  const userId = useSelector(state => state.auth.id);

  const onSaveArticlePress = async () => {
    try {
      await axios.post('/favourites', {
        ...article,
        userId,
      });
      alert('Artikel ini berhasil disimpan');
    } catch (error) {
      alert('Terjadi masalah');
      console.log({error});
    }
  };

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('Detail', {article});
      }}>
      <Box
        w="90%"
        rounded="md"
        borderWidth="4"
        borderColor="coolGray.200"
        mx="auto"
        mb="2">
        <Stack p="4" space="3">
          <Stack space="1">
            <Heading size="md">{article.title}</Heading>
            <Stack direction="row">
              <Text fontSize="xs" fontWeight="500" color="primary.500">
                {article.source.name} |
              </Text>
              <Icon
                name="content-save-outline"
                size={18}
                onPress={onSaveArticlePress}
              />
            </Stack>
          </Stack>
          <Text fontWeight="500">{article.description}</Text>
        </Stack>
      </Box>
    </Pressable>
  );
}
