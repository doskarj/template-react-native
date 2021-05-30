import * as React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { Text, View } from '@components/Themed';

export default function TabTwoScreen() {
  const basic = useSelector((state) => state.basicStore.basic);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <Text>{basic}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
