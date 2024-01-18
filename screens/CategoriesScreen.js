import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import MealsOverviewScreen from './MealsOverviewScreen';

import navigation from 'react'

const renderCategoryItem = (itemData)=> {
  const pressHandler =()=>{
    navigation.navigate('MealsOverView')
      }
  
  return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler}/>;
};

const CategoriesScreen = ({navigation}) => {
  const renderCategoryItem = (itemData)=> {
    const pressHandler =()=>{
      navigation.navigate('MealsOverview')
        }
    
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler}/>;
  };
  
  
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
