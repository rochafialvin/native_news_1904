import React from 'react';
import {Box, Heading, Text, Stack, Pressable} from 'native-base';

export default function ArticleItem({article, navigation}) {
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
            <Text fontSize="xs" fontWeight="500" color="primary.500">
              {article.source.name}
            </Text>
          </Stack>
          <Text fontWeight="500">{article.description}</Text>
        </Stack>
      </Box>
    </Pressable>
  );
}
