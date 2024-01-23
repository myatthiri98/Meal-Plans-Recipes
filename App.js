import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen.js';
import CategoriesScreen from './screens/CategoriesScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#351401'},
        headerTintColor: 'white',
        sceneContainerStyle: {backgroundColor: '#3f2f25'},
        drawerContentStyle: {backgroundColor: '#351401'},
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1',
      }}>
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({color, size}) => (
            <Icon name="list" color={color} size={size} />  
          ),
        }}
      />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} 
      options={{
        drawerIcon: ({ color, size }) => (
          <Icon name="star" color={color} size={size} />
        ),
      }} />
    </Drawer.Navigator>
  );
};

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
          name="Drawer"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />

        <Stack.Screen
          name="MealDetail"
          component={MealDetailScreen}
          options={{
            title: 'About the Meal',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create(
);

export default App;
