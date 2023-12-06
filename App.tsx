// Libraries
import { PaperProvider } from "react-native-paper";

// Screens
import MainScreen from "@screens/MainScreen";

// Utilities
import { CoinProvider } from "@contexts/CoinContext";

export default function App() {
  return (
    <PaperProvider>
      <CoinProvider>
        <MainScreen />
      </CoinProvider>
    </PaperProvider>
  );
}
