import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { colors } from "./src/utils/color";
import Focus from "./src/features/Focus";
import { useState } from "react";
import Timer from "./src/features/Timer";

export default function App() {
  const [currentSub, setCurrentSub] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSub ? (
        <Focus addSub={setCurrentSub} />
      ) : (
        <Timer
          focusSub={currentSub}
          onTimerEnd={() => {}}
          clearSub={() => setCurrentSub(null)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
});
