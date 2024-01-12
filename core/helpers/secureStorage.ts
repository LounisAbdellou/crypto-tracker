import { MMKV } from "react-native-mmkv";

export const storage = new MMKV();

export function setStoreItem(key: string, values: any) {
  storage.set(key, JSON.stringify(values));
}

export function getStoreItem(key: string) {
  const result = storage.getString(key);
  if (!result) return;

  return JSON.parse(result);
}
