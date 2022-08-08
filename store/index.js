import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./slices/favoritesSlice";
import marketReducer from "./slices/marketSlice";

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    market: marketReducer,
  },
});

export default store;
