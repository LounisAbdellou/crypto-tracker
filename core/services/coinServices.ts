import http from "./http-common";

export const fetchAllCoins = () => {
  return http.get("/coins/list");
};

export const fetchCoinsMarketData = (page: number) => {
  return http.get(
    `/coins/markets?vs_currency=${"usd"}&order=${"market_cap_desc"}&per_page=${10}&page=${page}`
  );
};

export const getCoinHistory = (coinId: number) => {
  return http.get(`/coins/${coinId}/history`);
};
