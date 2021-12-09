import React, {useState} from 'react';
import {Box, Text, Button, Input} from 'native-base';
import {apiNews} from '../../config/axios';

import AuthInput from '../../components/AuthInput';

export default function HomeScreen({navigation}) {
  const [keyword, setKeyword] = useState('');

  const fetchNews = async () => {
    try {
      const res = await apiNews.get('/v2/everything', {
        params: {
          apiKey: 'c7a94f6e229f477a9a5471f8125fa296',
          q: keyword,
          language: 'id',
          pageSize: 5,
          page: 1,
        },
      });

      console.log(res.data);
    } catch (error) {
      alert('Terjadi kesalahan');
    }
  };

  return (
    <Box>
      <Text> Home Screen </Text>
      <AuthInput onChangeText={setKeyword} />
      <Button onPress={fetchNews}>Search</Button>
    </Box>
  );
}
