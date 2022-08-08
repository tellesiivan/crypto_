import React, { useEffect, useState } from "react";

export default function useSearch() {
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
      if (!response.ok) throw new Error("Unable to get trending coins.");
      const req = await response.json();

      setData(req.coins);
    } catch (error) {
      setLoading(false);

      setErrMsg(error.message);
    }
    setLoading(false);
  };

  return { data, loading, errMsg, triggerSearch };
}
