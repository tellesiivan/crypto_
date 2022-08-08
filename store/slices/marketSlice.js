import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: {
    query: "",
    results: [],
  },
};

export const marketSlice = createSlice({
  name: "market",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.search.query = action.payload;
    },
    setSearchResults: (state, action) => {
      state.search.results = action.payload;
    },
  },
});

export const { setSearchResults, setSearchQuery } = marketSlice.actions;

// selectors
const selectSearch = (store) => store.market.search;

export { selectSearch };

export default marketSlice.reducer;
