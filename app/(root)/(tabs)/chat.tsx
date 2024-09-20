import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Chat from '@/components/Chat';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Text
        className='text-2xl font-JakartaBold p-3'
        > Chat </Text>
      <Chat />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default App;
