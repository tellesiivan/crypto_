import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteCoins: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favoriteCoins = [action.payload, ...state.favoriteCoins];
    },
    removeFavorite: (state, action) => {
      state.favoriteCoins = state.favoriteCoins.filter(
        (coin) => coin.id !== action.payload.id
      );
    },
    toggleFavorite: (state, action) => {
      const isFav = !!state.favoriteCoins.find(
        (fav) => fav.id === action.payload.id
      );

      if (isFav) {
        state.favoriteCoins = state.favoriteCoins.filter(
          (coin) => coin.id !== action.payload.id
        );
      } else {
        state.favoriteCoins = [action.payload, ...state.favoriteCoins];
      }
    },
  },
});

export const { addFavorite, removeFavorite, toggleFavorite } =
  favoritesSlice.actions;

// selectors
const favorites = (state) => state.favorites.favoriteCoins;

export { favorites };

export default favoritesSlice.reducer;
