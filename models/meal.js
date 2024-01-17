const createMeal = (
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree
  ) => {
    return {
      id,
      categoryIds,
      title,
      imageUrl,
      ingredients,
      steps,
      duration,
      complexity,
      affordability,
      isGlutenFree,
      isVegan,
      isVegetarian,
      isLactoseFree,
    };
  };
  
  export default createMeal;
  