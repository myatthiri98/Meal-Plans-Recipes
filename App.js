import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar animated={true} barStyle={'light-content'} backgroundColor="#24180f"/>
      <CategoriesScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24180f',
  },
});

export default App;
