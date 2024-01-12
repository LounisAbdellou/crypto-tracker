// Libraries
import _ from "lodash";
import { ReactNode, createContext, useRef, useState } from "react";

// Utilities
import { getTimeDiff } from "@helpers/dateTime";
import { getStoreItem, setStoreItem } from "@helpers/secureStorage";
import {
  Coin,
  CoinContext as ICoinContext,
  Market,
  StoredData,
  StoredDataTypes
} from "@interfaces/Coin";
import { fetchAllCoins, fetchCoinsMarketData } from "@services/coinServices";

export const CoinContext = createContext<ICoinContext>(null!);

export const CoinProvider = ({ children }: { children: ReactNode }) => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [markets, setMarkets] = useState<Market[]>([]);
  const marketPage = useRef(1);

  const getCoins = async () => {
    if (!_.isEmpty(coins)) return;
    const storedCoins: StoredData = getStoreItem(StoredDataTypes.COINS);
    const timeDiff = getTimeDiff(new Date(storedCoins.time), new Date());

    if (!_.isEmpty(storedCoins) && timeDiff < 5) {
      setCoins(storedCoins.values);

      return;
    }

    fetchAllCoins()
      .then((res) => {
        const newCoins: Coin[] = res.data;

        setCoins(newCoins);
        setStoreItem(StoredDataTypes.COINS, { values: newCoins, time: Date.now() });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getMarketData = () => {
    fetchCoinsMarketData(marketPage.current)
      .then((res) => {
        marketPage.current++;
        const newMarkets: Market[] = res.data;

        setMarkets(newMarkets);
        setStoreItem(StoredDataTypes.MARKETS, { values: newMarkets, time: Date.now() });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const value = { coins, markets, getCoins, getMarketData };

  return <CoinContext.Provider value={value}>{children}</CoinContext.Provider>;
};
