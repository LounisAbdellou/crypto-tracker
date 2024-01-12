export interface CoinContext {
  coins: Coin[];
  markets: Market[];
  getCoins: () => void;
  getMarketData: () => void;
}

export interface Coin {}

export interface Market {}

export enum StoredDataTypes {
  COINS = "coins",
  MARKETS = "markets"
}

export interface StoredData {
  values: Coin[] | Market[];
  time: Date;
}
