// thunks to get specified data on load or when requested

import {
  addSelectedCoinData,
  selectedCoinError,
  selectedCoinLoading,
} from "./marketSlice";

export const coinData = (coinID) => {
  console.log(coinID);
  return (dispatch) => {
    async function getDetails() {
      dispatch(selectedCoinLoading(true));
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${coinID}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=true`
        );
        console.log(response);
        if (!response.ok) throw new Error("Unable to get trending coins.");
        const data = await rq.json();
        dispatch(addSelectedCoinData(data));
      } catch (error) {
        dispatch(selectedCoinLoading(false));
        dispatch(
          selectedCoinError({
            msg: `${
              coinID
                ? `Data for ${coinID} was not found!`
                : "Unable to get data for this crypto coin"
            }`,
            status: true,
          })
        );
      }
      dispatch(selectedCoinLoading(false));
    }
    getDetails();
  };
};
