// Libraries
import _ from "lodash";
import { ReactNode, createContext, useState } from "react";

// Utilities
import { CoinContext as ICoinContext } from "@interfaces/Coin";
import { fetchAllCoins } from "@services/coinServices";

export const CoinContext = createContext<ICoinContext>(null!);

export const CoinProvider = ({ children }: { children: ReactNode }) => {
  const [coins, setCoins] = useState([]);

  const getCoins = () => {
    if (!_.isEmpty(coins)) return;

    fetchAllCoins()
      .then((res) => {
        const newCoins = res.data;

        setCoins(newCoins);
      })
      .catch((err) => {
        console.log(err);
      });

    // fetchAllMarkets()
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const value = { coins, getCoins };

  return <CoinContext.Provider value={value}>{children}</CoinContext.Provider>;
};
