import React from 'react';
import {Box, Heading, Text, Image, Stack} from 'native-base';

export default function DetailScreen({route, navigation}) {
  const {article} = route.params;

  return (
    <Box>
      <Image source={{uri: article.urlToImage}} />
      <Box>
        <Text>{article.publishedAt}</Text>
        <Stack>
          <Heading>{article.title}</Heading>
          <Stack direction="row">
            <Text>{article.author}</Text>
            <Text> | {article.source.name}</Text>
          </Stack>
        </Stack>
        <Text>{article.content}</Text>
      </Box>
    </Box>
  );
}
