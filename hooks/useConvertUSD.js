import React, { useState } from "react";

export default function useConvertUSD() {
  const [convertedPrice, setConvertedPrice] = useState(null);

  const convertPrice = async (id) => {
    const URL = `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd`;
    try {
      const res = await fetch(URL);
      const rq = await res.json();
      setConvertedPrice(rq);
    } catch (error) {
      console.log("error", error);
    }
  };

  return { convertedPrice, convertPrice };
}
