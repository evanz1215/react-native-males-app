import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: [],
    reducers: {
      addFavorite: (state, action) => {
        state.ids.push(action.payload);
      },
      removeFavorite: (state) => {
        state.ids.splice(state.ids.indexOf(action.payload), 1);
      },
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
