import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Flex = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.item, styles.itemA, styles.blueCoral]}>
        <Text>A</Text>
      </View>
      <View style={[styles.item, styles.itemB, styles.redWhite]}>
        <Text>B</Text>
      </View>
      <View style={[styles.item, styles.itemC, styles.greenLeaf]}>
        <Text>C</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#976dc4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemA: {},
  itemB: {},
  itemC: {},
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
