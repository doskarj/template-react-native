import * as React from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet } from 'react-native';

import { Text, View } from '@components/Themed';
import basicOperations from '@store/basicStore/operations';

export default function TabOneScreen() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(basicOperations.fetchBasic());
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
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
