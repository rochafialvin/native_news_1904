import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Flex = () => {
  const {container, item, itemA, itemB, itemC, blueCoral, redWhite, greenLeaf} =
    styles;
  return (
    <View style={container}>
      <View style={[item, itemA, blueCoral]}>
        <Text>A</Text>
      </View>
      <View style={[item, itemB, redWhite]}>
        <Text>B</Text>
      </View>
      <View style={[item, itemC, greenLeaf]}>
        <Text>C</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#976dc4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemA: {flex: 1},
  itemB: {flex: 2},
  itemC: {flex: 1},
  item: {
    width: 100,
    height: 100,
  },
  blueCoral: {
    backgroundColor: '#2e65f2',
  },
  greenLeaf: {
    backgroundColor: '#3eefae',
  },
  greenLeaf: {
    backgroundColor: '#3eefae',
  },
  redWhite: {
    backgroundColor: '#f28ae7',
  },
});

export default Flex;
