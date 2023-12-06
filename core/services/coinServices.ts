import http from "./http-common";

export const fetchAllCoins = () => {
  return http.get("/coins/list");
};

export const fetchAllMarkets = () => {
  return http.get("/coins/markets");
};

export const getCoinHistory = (coinId: number) => {
  return http.get(`/coins/${coinId}/history`);
};
