import React, {useState} from 'react';
import {
  Box,
  Text,
  Button,
  Input,
  FlatList,
  Flex,
  ScrollView,
} from 'native-base';
import {apiNews} from '../../config/axios';

import ArticleItem from './components/ArticleItem';

export default function HomeScreen({navigation}) {
  const [keyword, setKeyword] = useState('');
  const [articles, setArticles] = useState([]);

  const fetchNews = async () => {
    try {
      const res = await apiNews.get('/v2/everything', {
        params: {
          apiKey: 'c7a94f6e229f477a9a5471f8125fa296',
          q: keyword,
          language: 'id',
          page: 2,
        },
      });

      setArticles(res.data.articles);
    } catch (error) {
      alert('Terjadi kesalahan');
      console.log({error});
    }
  };

  return (
    <Flex flex="1" px="1" pt="1">
      <Input onChangeText={setKeyword} fontSize="16" mb="1" />
      <Button onPress={fetchNews} fontSize="16">
        Search
      </Button>

      <Flex>
        <FlatList
          data={articles}
          renderItem={({item}) => {
            return <ArticleItem navigation={navigation} article={item} />;
          }}
          keyExtractor={item => {
            return item.title;
          }}
        />
      </Flex>
    </Flex>
  );
}
