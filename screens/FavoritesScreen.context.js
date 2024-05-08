import { useContext } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FavoritesContext } from "../store/context/favorites.context";
import MealList from "../components/MealList/MealList";
import { MEALS } from "../data/dummy-data";

function FavoritesScreen() {
  const favoriteMealCtx = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealCtx.ids.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealList items={favoriteMeals}></MealList>;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
