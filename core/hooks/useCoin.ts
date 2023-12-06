import { CoinContext } from "@contexts/CoinContext";
import { useContext } from "react";

export const useCoin = () => {
  return useContext(CoinContext);
};
