import React from 'react';
import {Box, Heading, Text, Stack, Flex} from 'native-base';

export default function ArticleItem({article}) {
  return (
    <Box w="90%" borderWidth="4" borderColor="coolGray.200" mx="auto" mb="2">
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
  );
}
