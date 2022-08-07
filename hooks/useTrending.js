import React, { useEffect, useState } from "react";

export default function useTrending() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [errMsg, setErrMsg] = useState(null);

  useEffect(() => {
    trendingCoins();
  }, []);

  const trendingCoins = async () => {
    const URL = `https://api.coingecko.com/api/v3/search/trending`;
    setLoading(true);
    try {
      const response = await fetch(URL);
      if (!response.ok) throw new Error("Unable to get trending coins.");
      const req = await response.json();

      setData(req.coins);
    } catch (error) {
      setLoading(false);
      setErrMsg(error.message);
    }
    setLoading(false);
  };

  return { data, loading, errMsg };
}
