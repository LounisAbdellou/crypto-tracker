import * as SecureStore from "expo-secure-store";

export async function save(key: string, value: any) {
  await SecureStore.setItemAsync(key, value);
}

export async function getValueFor(key: string) {
  const result = await SecureStore.getItemAsync(key);

  if (result) {
    alert("🔐 Here's your value 🔐 \n" + result);
  } else {
    alert("No values stored under that key.");
  }
}
