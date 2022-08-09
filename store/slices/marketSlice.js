import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: {
    query: "",
    results: [],
  },
  trending: [],
  selectedCoin: {
    id: "",
    data: {},
    status: {
      loading: false,
      error: {
        msg: "",
        status: false,
      },
    },
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
    setTrendingResults: (state, action) => {
      state.trending = action.payload;
    },
    setSelectedCoinId: (state, action) => {
      state.selectedCoin.id = action.payload;
    },
    addSelectedCoinData: (state, action) => {
      state.selectedCoin.data = action.payload;
    },
    selectedCoinLoading: (state, action) => {
      state.selectedCoin.status.loading = action.payload;
    },
    selectedCoinError: (state, action) => {
      state.selectedCoin.status.error = {
        msg: action.payload.msg,
        status: action.payload.status,
      };
    },
  },
});

export const {
  setSearchResults,
  setSearchQuery,
  setTrendingResults,
  setSelectedCoinId,
  addSelectedCoinData,
  selectedCoinLoading,
  selectedCoinError,
} = marketSlice.actions;

// selectors
const selectSearch = (store) => store.market.search;
const selectTrending = (store) => store.market.trending;
const selectedCoin = (store) => store.market.selectedCoin;

export { selectSearch, selectTrending, selectedCoin };

export default marketSlice.reducer;
