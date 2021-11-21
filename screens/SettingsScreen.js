import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Chat Screen</Text>
      <Button title="Click Me" onPress={() => alert('Clicked')} />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc',
  },
});
