import { useEffect, useLayoutEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList/MealList";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(catId) >= 0
  );

  // 使用useEffect時在滑動動畫時不會馬上更新標題，因為useEffect是在render之後執行的
  //   useEffect(() => {
  //     const categoryTitle = CATEGORIES.find((cat) => cat.id === catId).title;

  //     navigation.setOptions({
  //       title: categoryTitle,
  //     });
  //   }, [catId, navigation]);

  // 改用useLayoutEffect，可以在render之前執行
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((cat) => cat.id === catId).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealList items={displayedMeals}></MealList>;
}

export default MealsOverviewScreen;
