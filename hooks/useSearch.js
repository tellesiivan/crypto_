import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setSearchResults,
  setTrendingResults,
} from "../store/slices/marketSlice";

export default function useSearch() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [errMsg, setErrMsg] = useState(null);

  const triggerSearch = async (searchType) => {
    const URL =
      searchType === "trending"
        ? `https://api.coingecko.com/api/v3/search/trending`
        : `https://api.coingecko.com/api/v3/search?query=${searchType}`;

    setLoading(true);
    try {
      const response = await fetch(URL);
      console.log(response, "response - useSearch");
      if (!response.ok) throw new Error("Unable to get trending coins.");
      const req = await response.json();

      // have access to results throughout the app
      if (searchType === "trending") {
        dispatch(setTrendingResults(req.coins));
      } else {
        dispatch(setSearchResults(req.coins));
      }
      setData(req.coins);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
      setErrMsg(error.message);
    }
    setLoading(false);
  };

  return { data, loading, errMsg, triggerSearch };
}
