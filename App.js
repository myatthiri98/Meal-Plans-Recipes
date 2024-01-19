import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        barStyle={'light-content'}
        backgroundColor="#351401"
      />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#351401'},
          headerTintColor: 'white',
          contentStyle: {backgroundColor: '#3f2f25'},
        }}>
        <Stack.Screen
          name="MealsCategories"
          component={CategoriesScreen}
          options={{title: 'All Categories'}}
        />
        <Stack.Screen
          name="MealsOverview"
          component={MealsOverviewScreen}
          // options={({route, navigation}) => {
          //   const catId = route.params.categoryId;
          //   return {
          //     title: catId,
          //   };
          // }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24180f',
  },
});

export default App;
