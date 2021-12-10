import React from 'react';
import {Box, Heading, Text, Image, Stack, ScrollView} from 'native-base';

export default function DetailScreen({route, navigation}) {
  const {article} = route.params;

  return (
    <ScrollView>
      <Box px="2" pt="1" rounded="md" bg="coolGray.100">
        <Image
          h="300"
          alt="image"
          source={{uri: article.urlToImage}}
          borderTopRadius="md"
        />
        <Box mt="-10" bg="coolGray.100" borderTopRadius="10" p="3">
          <Stack
            pb="2"
            mb="3"
            space="1"
            borderBottomWidth="2"
            borderBottomColor="coolGray.700">
            <Heading>{article.title}</Heading>
            <Stack direction="row">
              <Text color="coolGray.500" fontWeight="500">
                {article.author}
              </Text>
              <Text color="primary.500"> | {article.source.name}</Text>
            </Stack>
          </Stack>
          <Stack space="4">
            <Text>
              <Text fontWeight="bold">VIVA</Text> – BWF World Championships atau
              Kejuaraan Dunia 2021 segera bergulir. Dimulai 12 berakhir 19
              Desember mendatang.
            </Text>
            <Text>
              Sayangnya, Indonesia mundur dari Kejuaraan Dunia 2021. Rabu 8
              Desember lalu PBSI memutuskan skuad bulutangkis Indonesia mundur.
              Keputusan ini diambil oleh Ketua Umum PP PBSI Agung Firman
              Sampurna demi menjaga keselamatan pemain setelah mendapat masukan
              dari pengurus, pelatih, dan Kabid Binpres. Penyebaran varian baru
              virus COVID-19 Omicron yang tidak menentu menjadi alasan utamanya.
            </Text>
            <Text>
              Hal itu, dijelaskan oleh Kepala Bidang Pembinaan dan Prestasi PP
              PBSI Rionny Mainaky. "Penyebaran virus Omicron yang cepat sehingga
              perubahan protokol kesehatan yang tidak menentu membuat kami
              memutuskan untuk mundur dari Kejuaraan Dunia 2021," ujar Rionny
              lewat keterangan resmi. Rionny menjelaskan, PBSI tak ingin
              mengambil risiko. Semua demi keselamatan para atlet dan disetujui
              oleh para atlet Indonesia. "Kami tidak mau mengambil resiko.
              Keselamatan dan kesehatan atlet lebih utama. Disini
            </Text>
            <Text>
              Para pemain juga sudah kami ajak berdiskusi dan mereka setuju
              untuk menarik diri dari Kejuaraan Dunia," ucap Rionny.
            </Text>
            <Text>
              Hal itu, dijelaskan oleh Kepala Bidang Pembinaan dan Prestasi PP
              PBSI Rionny Mainaky. "Penyebaran virus Omicron yang cepat sehingga
              perubahan protokol kesehatan yang tidak menentu membuat kami
              memutuskan untuk mundur dari Kejuaraan Dunia 2021," ujar Rionny
              lewat keterangan resmi. Rionny menjelaskan, PBSI tak ingin
              mengambil risiko. Semua demi keselamatan para atlet dan disetujui
              oleh para atlet Indonesia. "Kami tidak mau mengambil resiko.
              Keselamatan dan kesehatan atlet lebih utama.
            </Text>
            <Text>
              Para pemain juga sudah kami ajak berdiskusi dan mereka setuju
              untuk menarik diri dari Kejuaraan Dunia," ucap Rionny.
            </Text>
          </Stack>
        </Box>
      </Box>
    </ScrollView>
  );
}
