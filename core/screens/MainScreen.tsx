// Libraries
import { StatusBar } from "expo-status-bar";
import { useEffect, useRef } from "react";
import { AppState, StyleSheet, Text, View } from "react-native";

// Screens

// Utilities
import { useCoin } from "@hooks/useCoin";

export default function MainScreen() {
  const isAppLaunch = useRef(true);
  const coinContext = useCoin();
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const appStateSubscription = AppState.addEventListener("change", (nextAppState) => {
      if (appState.current.match(/inactive|background/) && nextAppState === "active") {
        coinContext.getCoins();
      }

      appState.current = nextAppState;
    });

    return () => {
      appStateSubscription.remove();
    };
  }, []);

  useEffect(() => {
    if (!isAppLaunch.current) {
      return;
    }

    coinContext.getCoins();
    isAppLaunch.current = false;
  }, []);

  return (
    <View style={styles.container}>
      <Text>OKAY</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
