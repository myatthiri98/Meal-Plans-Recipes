import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, { useLayoutEffect } from 'react';
import MealItem from '../components/MealItem';
import {CATEGORIES, MEALS} from '../data/dummy-data';

const MealsOverviewScreen = ({route, navigation}) => {
  const catId = route.params?.categoryId;

  const displayedMeals = MEALS.filter(mealItem => {
    // Check if categoryId is an array and if it includes the catId
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });


  useLayoutEffect(
    ()=> {
      const categoryTitle = CATEGORIES.find(
        (category)=> category.id === catId
      ).title
    }
  )
  const categoryTitle = CATEGORIES.find(
    category => category.id === catId,
  ).title;

  navigation.setOptions({
    title: categoryTitle,
  });

  const renderMealItem = itemData => {
    const item = itemData.item;
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
